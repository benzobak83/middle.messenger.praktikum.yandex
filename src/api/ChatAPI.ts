import { HTTPTransport } from "../core/HTTPTransport/HTTPTransport";
import { BaseAPI, BaseURL } from "./BaseAPI";

type TCreateChatData = {
  title: string;
};

type TChatData = {
  chatId: number;
};

const chatAPIInstance = new HTTPTransport(BaseURL);

class ChatAPI extends BaseAPI {
  public createChat(data: TCreateChatData): Promise<unknown> {
    return chatAPIInstance.post("/chats", { data });
  }

  public getChats(): Promise<unknown> {
    return chatAPIInstance.get("/chats");
  }

  public deleteChat(data: TChatData): Promise<unknown> {
    return chatAPIInstance.delete("/chats", { data });
  }
}

export { ChatAPI, TCreateChatData };
