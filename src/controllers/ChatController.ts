import {
  ChatAPI,
  TAddUserData,
  TChatIdData,
  TCreateChatData,
} from "../api/ChatAPI";
import { TUserDialog, UserDialog } from "../components/userDialog/userDialog";
import { Block } from "../core/block/block";
import { store } from "../core/store/Store";
import { TChatPageProps } from "../pages/chat/index";
import { TResponse } from "../utils/types";

type TChat = Record<string, string | boolean | number>;
type TArrayChats = Array<TChat>;
const chatApi = new ChatAPI();

class ChatController {
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

  public async getChats(): Promise<unknown> {
    return chatApi.getChats().then((res: TResponse) => {
      const chats = JSON.parse(res.response);
      console.log(chats);

      const renamedChats = this.renameChats(chats);

      return store.set("chats", [...renamedChats]);
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

  public async addUserInChat(data: TAddUserData): Promise<unknown> {
    const active_chat_id = store.getState().active_chat_id;
    const formdatedData = { users: data.users, chatId: active_chat_id };
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
            this.openChatWindow(block);
          },
        },
      });
    });
    sideBar?.setChildren({ userDialogs: arrayChatsBlock });
  }

  public async openChatWindow(block: Block<TChatPageProps>) {
    block.setProps({
      ...block.props,
      active_chat_id: store.getState().active_chat_id,
    });

    console.log(`opened chat with id ${store.getState().active_chat_id}`);
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
}

export { ChatController, TChat, TArrayChats };
