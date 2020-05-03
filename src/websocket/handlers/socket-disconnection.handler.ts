import { EventHandler } from '@websocket/models/event-handler.model';
import { EventManager } from '@websocket/models/event-manager.model';

/**
 * Handles socket disconnections
 */
export class SocketDisconnection implements EventHandler {
  constructor(private manager: EventManager) {}

  async handleEvent() {
    // Do something useful like deleting the connection id from DB
    return { result: 'Session deleted', connectionId: this.manager.connectionId };
  }
}
