import { APIGatewayProxyEvent } from 'aws-lambda';
import { DBProvider } from '@common/providers/db.provider';
import { Logger } from '@common/helpers/logger';
import { Socket } from '@websocket/models/socket.model';

export class EventManager {
  private readonly logger = new Logger(EventManager.name);

  connectionId: string;
  endpoint: string;
  event: APIGatewayProxyEvent;
  db: DBProvider;
  eventBody: any;
  queryParams: any;
  socket: Socket;

  constructor(connectionId: string, event: APIGatewayProxyEvent) {
    this.connectionId = connectionId;
    this.event = event;

    const domainName = event.requestContext.domainName;
    const stage = event.requestContext.stage;
    this.endpoint = `https://${domainName}/${stage}`;
    this.logger.debug(`Endpoint created: ${this.endpoint}`);

    // socket is used for communicating with widgets on the browsers
    this.socket = new Socket(this.endpoint);

    // create a db client instance
    this.db = new DBProvider();
    this.db.onInit(); // start the client

    // retrieve the body for the request
    this.eventBody = (event.body && JSON.parse(event.body)) || {};

    // retrive query params
    this.queryParams = event.queryStringParameters || {};
  }

  /**
   * Send data to client/browser
   *
   * @param data data to be sent
   * @param connectionId connection id from API gateway assigned to client when they connected
   */
  async send(data: any, connectionId?: string) {
    return this.socket.sendMessage(data, connectionId || this.connectionId);
  }
}
