import {
  ChatAPI,
  TAddUserData,
  TChatIdData,
  TCreateChatData,
  TToken,
} from "../api/ChatAPI";
import {
  ChatMessage,
  TChatMessage,
} from "../components/chatMessage/chatMessage";
import { TUserDialog, UserDialog } from "../components/userDialog/userDialog";
import { Block } from "../core/block/block";
import { store } from "../core/store/Store";
import { SOCKET_EVENTS, WS } from "../core/websocket/WS";
import { TChatPageProps } from "../pages/chat/index";
import { TResponse } from "../utils/types";

type TChat = Record<string, string | boolean | number>;
type TArrayChats = Array<TChat>;
type TMessage = Record<string, string>;
type TMessageResponse = {
  id: number;
  user_id: number;
  chat_id: number;
  type: string;
  content: string;
  time: string;
  file: null | string;
  is_read: boolean;
};

const chatApi = new ChatAPI();

class ChatController {
  private WS: Record<number, WS>;

  constructor() {
    this.WS = {};
  }

  public async openSocket(token: string, chatId: number) {
    const userId = store.getState().user.id;

    const urlWS = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`;
    console.log(urlWS);
    this.WS[chatId] = new WS(urlWS);
    this.registerEvents(chatId, this.WS[chatId]);
    this.WS[chatId].connect();
  }

  async openChatWS(id: number) {
    console.log("открыт чат ");
    this.WS[id].getOldMessage();
  }
  async sendMessageWS(id: number, data: TMessageResponse) {
    const arrayMessages = store.getState().message;

    if (arrayMessages && arrayMessages[id])
      store.set(`message.${id}`, [...arrayMessages[id], data]);
    else store.set(`message.${id}`, data);

    console.log(store.getState());
  }
  async closeChatWS(id: number) {
    console.log("закрыт чат ", id);
  }

  private registerEvents(chatId: number, wsObject: WS) {
    wsObject.on(SOCKET_EVENTS.OPEN, () => this.openChatWS(chatId));
    wsObject.on(SOCKET_EVENTS.MESSAGE, ({ data }: TMessage) => {
      this.sendMessageWS(chatId, JSON.parse(data));
    });
    wsObject.on(SOCKET_EVENTS.CLOSE, () => this.closeChatWS(chatId));
  }
  public async createChat(data: TCreateChatData): Promise<unknown> {
    return chatApi
      .createChat(data)
      .then((res: TResponse) => {
        console.log(res.response);
      })
      .then(async () => {
        await this.getChats();
      });
  }

  public async sendMessage(message: Record<string, unknown>) {
    const messageText = message.message as TMessage;
    const chatId = store.getState().active_chat_id;
    await this.WS[chatId].sendMessage(messageText);
  }

  public async getChats(): Promise<unknown> {
    return chatApi.getChats().then((res: TResponse) => {
      const chats = JSON.parse(res.response);
      console.log(chats);

      const renamedChats = this.renameChats(chats);

      return store.set("chats", [...renamedChats]);
    });
  }

  public async connectAll() {
    const chats = store.getState().chats;

    await chats.forEach(async (chat: TUserDialog) => {
      const idChat = chat.idChat as number;
      await this.getToken({ chatId: idChat });
      const token = store.getState().token;
      this.openSocket(token, idChat);
    });
  }

  public async deleteChat(data: TChatIdData): Promise<unknown> {
    return chatApi
      .deleteChat(data)
      .then(async (res: TResponse) => {
        console.log(JSON.parse(res.response));
        await this.getChats();
      })
      .catch((e) => console.log(e.responseText));
  }

  public async addUserInChat(data: Record<string, unknown>): Promise<unknown> {
    const active_chat_id = store.getState().active_chat_id;
    const formdatedData = {
      users: [data.users],
      chatId: active_chat_id,
    } as TAddUserData;
    return chatApi
      .addUserInChat(formdatedData)
      .then(async (res: TResponse) => {
        console.log(JSON.parse(res.response));
      })
      .catch((e) => console.log(e.responseText));
  }

  public async deleteUserInChat(data: TAddUserData): Promise<unknown> {
    const active_chat_id = store.getState().active_chat_id;
    const formdatedData = { users: data.users, chatId: active_chat_id };
    return chatApi
      .deleteUserInChat(formdatedData)
      .then(async (res: TResponse) => {
        console.log(JSON.parse(res.response));
      })
      .catch((e) => console.log(e.responseText));
  }

  public renderChats(block: Block<TChatPageProps>) {
    const sideBar = block.getChild("sideBar");
    const arrayChats = store.getState().chats;

    const arrayChatsBlock = arrayChats.map((chat: TUserDialog) => {
      return new UserDialog({
        ...chat,
        events: {
          click: () => {
            store.set("active_chat_id", chat.idChat);
          },
        },
      });
    });
    sideBar?.setChildren({ userDialogs: arrayChatsBlock });
  }

  public renderMessages(block: Block<TChatPageProps>) {
    const chatList = block.getChild("chatList");
    const chatId = store.getState().active_chat_id;
    const arrayMessages = store.getState().message[chatId];
    console.log(arrayMessages);
    const renamedArrayMessages = this.renameMessages(arrayMessages);

    const arrayMessagesBlock = renamedArrayMessages.map(
      (message: TChatMessage) => {
        return new ChatMessage({
          ...message,
        });
      }
    );

    chatList?.setChildren({
      messages: arrayMessagesBlock,
    });
  }

  public async getToken(chatId: TChatIdData) {
    return chatApi
      .getToken(chatId)
      .then((res: TResponse) => {
        return JSON.parse(res.response);
      })
      .then((data: TToken) => {
        return store.set("token", data.token);
      });
  }

  public renameChats(chats: TArrayChats): TArrayChats {
    return chats.map((chat: TChat) => {
      return {
        src_avatar: chat.avatar,
        nameUser: chat.title,
        count_unreaded_msg: chat.unread_count,
        created_by: chat.created_by,
        idChat: chat.id,
        ["last-msg"]: chat.last_message,
      };
    });
  }

  public renameMessages(messages: TMessageResponse[]): Record<string, any> {
    return messages.map((message: TMessageResponse) => {
      return {
        messageText: message.content,
        messageDate: new Date(message.time),
        isUser: message.user_id === store.getState().user.id,
        isReaded: message.is_read,
      };
    });
  }
}

export { ChatController, TChat, TArrayChats, TMessage, TMessageResponse };
