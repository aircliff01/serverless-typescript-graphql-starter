import { APIGatewayProxyResult } from 'aws-lambda';

export const Success: APIGatewayProxyResult = {
  statusCode: 200,
  body: 'success',
};

export const InvalidAction: APIGatewayProxyResult = {
  statusCode: 400,
  body: 'invalid action type',
};

export const InternalError: APIGatewayProxyResult = {
  statusCode: 500,
  body: 'An error occurred with the request',
};

export enum SocketMessageType {
  ERROR = 'error',
  GET_SESSION = 'getSession',
}

export class SocketMessage {
  constructor(type: SocketMessageType, message: any) {
    Object.assign(this, { messageType: type, message });
  }
}

export class SocketError {
  constructor(message: any) {
    Object.assign(this, { messageType: SocketMessageType.ERROR, message: { error: message } });
  }
}
