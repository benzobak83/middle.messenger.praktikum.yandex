import { TMessage } from "../../controllers/ChatController";
import { EventBus } from "../event-bus/eventBus";

export enum SOCKET_EVENTS {
  OPEN = "open",
  CLOSE = "close",
  MESSAGE = "message",
  FILE = "file",
  ERROR = "error",
}

class WS extends EventBus {
  private socket: WebSocket;

  constructor(url: string) {
    super(), (this.socket = new WebSocket(url));
  }

  public connect() {
    this.subscribe(this.socket);
  }

  public async sendMessage(
    content: TMessage,
    isPhoto = false
  ): Promise<unknown> {
    if (isPhoto) {
      return this.socket.send(
        JSON.stringify({
          content,
          type: SOCKET_EVENTS.FILE,
        })
      );
    }
    return this.socket.send(
      JSON.stringify({
        content,
        type: SOCKET_EVENTS.MESSAGE,
      })
    );
  }

  public ping() {
    return this.socket.send(
      JSON.stringify({
        type: "ping",
      })
    );
  }

  public getOldMessage() {
    return this.socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
      })
    );
  }

  private subscribe(socket: WebSocket): void {
    socket.addEventListener(SOCKET_EVENTS.OPEN, () => {
      this.emit(SOCKET_EVENTS.OPEN);
    });

    socket.addEventListener(SOCKET_EVENTS.MESSAGE, ({ data }) => {
      this.emit(SOCKET_EVENTS.MESSAGE, { data });
    });
    socket.addEventListener(SOCKET_EVENTS.CLOSE, () => {
      this.emit(SOCKET_EVENTS.CLOSE);
    });
    socket.addEventListener(SOCKET_EVENTS.ERROR, (e) => {
      this.emit(SOCKET_EVENTS.ERROR, e);
    });
  }
}

export { WS };
