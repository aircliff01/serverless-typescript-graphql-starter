import { ApiGatewayManagementApi } from 'aws-sdk';
import { Logger } from '@common/helpers/logger';
import { PostToConnectionRequest } from 'aws-sdk/clients/apigatewaymanagementapi';

/**
 * Creates a connection with the API Gateway and uses the specified endpoint to support
 * communication with browsers to send messages back and forth through the socket connection
 */
export class Socket {
  private readonly logger = new Logger(Socket.name);

  gatewayMgmtAPI: ApiGatewayManagementApi;

  constructor(private endpoint: string) {
    // create an api managment instance
    this.gatewayMgmtAPI = new ApiGatewayManagementApi({
      apiVersion: '2018-11-29',
      endpoint,
    });

    this.logger.debug(`Endpoint created: ${this.endpoint}`);
  }

  /**
   * Sends a message to a connected client/browser using websockets
   * @param data data to be sent out to the client/browser
   * @param connectionId connection id created by the API gateway
   */
  async sendMessage(data: any, connectionId: string) {
    const params: PostToConnectionRequest = {
      ConnectionId: connectionId,
      Data: JSON.stringify(data),
    };

    return this.gatewayMgmtAPI.postToConnection(params).promise();
  }
}
