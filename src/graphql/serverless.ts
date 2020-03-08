import {
  APIGatewayProxyEvent,
  Context,
  Callback,
  APIGatewayProxyResult,
  APIGatewayProxyHandler
} from "aws-lambda";
import server from "./app";

export const handler: APIGatewayProxyHandler = (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyResult>
) => {
  const handler = server.createHandler();

  // tell AWS lambda we do not want to wait for NodeJS event loop
  // to be empty in order to send the response
  context.callbackWaitsForEmptyEventLoop = false;

  // process the request
  return handler(event, context, callback);
};
