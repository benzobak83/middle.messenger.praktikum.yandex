import { HTTPTransport } from "../core/HTTPTransport/HTTPTransport";
import { BaseAPI, BaseURL } from "./BaseAPI";

type TCreateChatData = {
  title: string;
};

type TChatIdData = {
  chatId: number;
};

type TAddUserData = {
  users: number[];
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

  public deleteChat(data: TChatIdData): Promise<unknown> {
    return chatAPIInstance.delete("/chats", { data });
  }

  public addUserInChat(data: TAddUserData): Promise<unknown> {
    return chatAPIInstance.put("/chats/users", { data });
  }

  public deleteUserInChat(data: TAddUserData): Promise<unknown> {
    return chatAPIInstance.delete("/chats/users", { data });
  }
}

export { ChatAPI, TCreateChatData, TChatIdData, TAddUserData };
