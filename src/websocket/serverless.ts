import 'reflect-metadata';

import { APIGatewayProxyHandler, APIGatewayEvent } from 'aws-lambda';
import { EventManager } from '@websocket/models/event-manager.model';
import { EventHandler } from '@websocket/models/event-handler.model';
import { RouteType } from '@websocket/models/route-type.enum';
import { InternalError, InvalidAction, Success } from '@websocket/models/event-response.model';

import { Logger } from '@common/helpers/logger';

import { SocketConnection } from './handlers/socket-connection.handler';
import { SocketDisconnection } from './handlers/socket-disconnection.handler';

const LOGGER_CONTEXT = 'Serverless.websocket';
const logger = new Logger(LOGGER_CONTEXT);

export const handler: APIGatewayProxyHandler = async (event) => {
  return await processEvent(event).catch((error) => {
    logger.error(error, 'Error occurred while processing WS Event');

    return InternalError;
  });
};

/**
 * Processes an event recieved from lambda through websocket connection
 *
 * @param event event to be processed
 */
const processEvent = async (event: APIGatewayEvent) => {
  const context = event.requestContext;
  const connectionId = context.connectionId;
  const eventManager = new EventManager(connectionId, event);

  let handler: EventHandler;
  logger.debug(`Recieved eventType: ${context.eventType}, routeKey: ${context.routeKey}`);

  switch (context.routeKey) {
    case RouteType.CONNECT:
      handler = new SocketConnection(eventManager);
      break;
    case RouteType.DISCONNECT:
      handler = new SocketDisconnection(eventManager);
      break;
  }

  if (!handler) {
    return InvalidAction;
  }

  const handlerRes = (await handler.handleEvent()) as any;
  return handlerRes || Success;
};
