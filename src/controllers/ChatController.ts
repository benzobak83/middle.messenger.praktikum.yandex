import { router } from "../index";
import {
  ChatAPI,
  TAddUserData,
  TChatIdData,
  TCreateChatData,
  TSearchUser,
  TToken,
} from "../api/ChatAPI";
import {
  TChatMessage,
  TChatMessageOrNull,
} from "../components/chatMessage/chatMessage";
import { TUserDialog, UserDialog } from "../components/userDialog/userDialog";
import { Block } from "../core/block/block";
import { routerPath } from "../core/router/routerPathVar";
import { store } from "../core/store/Store";
import { SOCKET_EVENTS, WS } from "../core/websocket/WS";
import { TChatPageProps } from "../pages/chat/index";
import { cloneDeep } from "../utils/cloneDeep";
import { TResponse } from "../utils/types";
import { debounce } from "../utils/debounce";

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
type TUsersByChat = {
  id: 123;
  first_name: "petya";
  second_name: "petrov";
  display_name: "petya petrov";
  login: "my-login";
  email: "my@email.com";
  phone: "89223332211";
  avatar: "/path/to/my-file.jpg";
  role: "admin";
};
type TEditPhotoChatFormElements = {
  avatar: FormData;
};

const chatApi = new ChatAPI();

class ChatController {
  private WS: Record<number, WS>;
  private block: Block<TChatPageProps>;
  private debounceRenderChats: () => unknown;

  constructor() {
    this.WS = {};
    this.debounceRenderChats = debounce(this.renderChats, 1000);
  }

  public openSocket(token: string, chatId: number) {
    const userId = store.getState().user.id;
    const urlWS = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`;

    this.WS[chatId] = new WS(urlWS);
    this.registerEvents(chatId, this.WS[chatId]);
    this.WS[chatId].connect();
  }

  async openChatWS(id: number) {
    this.WS[id].getOldMessage();

    setInterval(() => {
      this.WS[id].ping();
    }, 5000);
  }

  async sendMessageWS(id: number, data: TMessageResponse[] | TMessageResponse) {
    if ((data as TMessageResponse).type === "pong") return;
    const arrayMessages = store.getState().message;

    if (arrayMessages && arrayMessages[id]) {
      store.set(`message.${id}`, [...arrayMessages[id], data]);
    } else {
      store.set(`message.${id}`, (data as TMessageResponse[]).reverse());
    }

    this.debounceRenderChats();
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
      .then(async (res) => {
        await this.getChats();
        return JSON.parse((res as TResponse).response);
      })
      .then(async (data) => {
        const { id } = data;
        await this.getToken({ chatId: id });
        const token = store.getState().token;
        this.openSocket(token, id);
        return data;
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
      const renamedChats = this.renameChats(chats);
      return store.set("chats", [...renamedChats]);
    });
  }

  public async connectAll() {
    const chats = store.getState().chats;

    chats.forEach(async (chat: TUserDialog) => {
      const idChat = chat.idChat as number;
      await this.getToken({ chatId: idChat });
      const token = store.getState().token;
      this.openSocket(token, idChat);
    });
    this.block = router
      .getRoute(routerPath.chat)
      .getBlock() as Block<TChatPageProps>;
  }

  public async deleteChat(data: TChatIdData): Promise<unknown> {
    return chatApi
      .deleteChat(data)
      .then(async () => {
        await this.getChats();
      })
      .then(() => {
        store.set("active_chat_id", null);
        store.set("active_chat", null);
      })
      .catch((e) => console.log(e.responseText));
  }

  public async addUserInChat(data: TSearchUser): Promise<unknown> {
    const active_chat_id = store.getState().active_chat_id;
    const user = await chatApi
      .serachUserById(data)
      .then((res: TResponse) => JSON.parse(res.response))
      .then((data) => {
        return data[0];
      });

    if (user?.login !== data.login) throw Error("пользователь не найден");

    const formdatedData = {
      users: [user.id],
      chatId: active_chat_id,
    } as TAddUserData;

    return chatApi
      .addUserInChat(formdatedData)
      .catch((e) => console.log(e.responseText));
  }

  public async deleteUserInChat(): Promise<unknown> {
    const active_chat_id = store.getState().active_chat_id;
    const activeUserElements = document.querySelectorAll(
      'li[data-selected = "true"]'
    );
    if (!activeUserElements) return;

    const users: number[] = [...activeUserElements].map((item: HTMLElement) => {
      return Number(item.dataset.id);
    });

    const formdatedData = { users, chatId: active_chat_id };
    return chatApi
      .deleteUserInChat(formdatedData)
      .catch((e) => console.log(e.responseText));
  }

  public async renderChats() {
    const sideBar = this.block.getChild("sideBar");
    await this.getChats();
    const arrayChats = store.getState().chats;

    const arrayChatsBlock = arrayChats.map((chat: TUserDialog) => {
      return new UserDialog({
        ...chat,
        events: {
          click: () => {
            store.set("active_chat_id", chat.idChat);
            store.set("active_chat", cloneDeep(chat));
          },
        },
      });
    });
    sideBar?.setChildren({ userDialogs: arrayChatsBlock });
    const chatWindow = document.querySelector(".chat-main__messages");
    chatWindow ? (chatWindow.scrollTop = chatWindow?.scrollHeight) : null;
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
  public async getUsersByChat(id: number) {
    return chatApi
      .getUsersByChat({ id })
      .then((data: TResponse) => {
        return JSON.parse(data.response);
      })
      .then((data: TUsersByChat[]) => {
        return store.set("users_in_chat", data);
      });
  }

  public async changeAvatarInChat(data: unknown): Promise<unknown> {
    const chatId = store.getState().active_chat_id as string;
    const formData = (data as TEditPhotoChatFormElements).avatar;

    formData.append("chatId", chatId);

    return await chatApi
      .changeAvatarInChat(formData)
      .then((res: TResponse) => {
        return JSON.parse(res.response);
      })
      .catch((e) => console.log(e));
  }

  public renameChats(chats: TArrayChats): TArrayChats {
    return chats.map((chat: TChat) => {
      if (chat.last_message) {
        // eslint-disable-next-line
        const last_message: any = chat.last_message;

        last_message.time = new Date(last_message.time).toLocaleString();

        if (last_message.content.length > 30) {
          last_message.content = `${last_message.content.slice(0, 30)}...`;
        }
      }

      return {
        src_avatar: chat.avatar || "../../../static/img/default_avatar.png",
        chatName: chat.title,
        count_unreaded_msg: chat.unread_count,
        created_by: chat.created_by,
        idChat: chat.id,
        ["last-msg"]: chat.last_message,
      };
    });
  }

  public renameMessages(messages: TMessageResponse[]): TChatMessageOrNull[] {
    return messages.map((message: TMessageResponse) => {
      if (new Date(message.time).toLocaleString() == "Invalid Date") {
        return null;
      }
      return {
        messageText: message.content,
        messageDate: new Date(message.time).toLocaleString(),
        isUser: message.user_id === store.getState().user.id,
        isReaded: message.is_read,
      } as TChatMessage;
    });
  }
}

export {
  ChatController,
  TChat,
  TArrayChats,
  TMessage,
  TMessageResponse,
  TEditPhotoChatFormElements,
  TUsersByChat,
};
