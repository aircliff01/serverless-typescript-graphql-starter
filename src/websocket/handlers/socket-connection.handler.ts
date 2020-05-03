import { EventHandler } from '@websocket/models/event-handler.model';
import { EventManager } from '@websocket/models/event-manager.model';

/**
 * Handles a new socket connection
 */
export class SocketConnection implements EventHandler {
  constructor(private manager: EventManager) {}

  async handleEvent() {
    // do something user here like saving the connection id into DB
    return { result: 'Hello World', connectionId: this.manager.connectionId };
  }
}
