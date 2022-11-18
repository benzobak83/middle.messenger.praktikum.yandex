import "../../global-styles/global.scss";
import "./chat.scss";
import "../../components/userDialog/userDialog.scss";
import "../../components/sideBar/sideBar.scss";
import "../../components/chatTitle/chatTitle.scss";
import "../../components/chatList/chatList.scss";
import "../../components/chatMessage/chatMessage.scss";
import "../../components/formSendMessage/formSendMessage.scss";
import "../../components/modal/modal.scss";

import { Block } from "../../core/block/block";
import { chatPageTemplate } from "./chat.tmpl";
import { SideBar } from "../../components/sideBar/sideBar";
import { ChatTitle } from "../../components/chatTitle/chatTitle";
import { ChatList } from "../../components/chatList/chatList";
import { FormSendMsg } from "../../components/formSendMessage/formSendMsg";
import { Indexed, TPropsSettings } from "../../utils/types";
import { sideBar } from "../../components/sideBar/models/sideBar";
import { chatTitle } from "../../components/chatTitle/models/chatTitle";
import { chatList } from "../../components/chatList/models/chatList";
import { formSendMessage } from "../../components/formSendMessage/models/formSendMessage";
import { connect } from "../../utils/connect";
import { AuthController } from "../../controllers/authController";
import {
  addUserInChatModal,
  createChatModal,
  deleteChatModal,
  deleteUserInChatModal,
} from "../../components/modal/models/modals";
import { submitForm } from "../../utils/submitForm";
import { ChatController } from "../../controllers/ChatController";
import { TAddUserData, TCreateChatData } from "../../api/ChatAPI";
import { TModal } from "../../components/modal/modal";
import { labelFocus } from "../../utils/labelFocus";

type TChatPageProps = {
  sideBar: SideBar;
  chatTitle: ChatTitle;
  chatList: ChatList;
  formSendMessage: FormSendMsg;
  active_chat_id?: number;
  createChatModal: TModal;
  deleteChatModal: TModal;
  deleteUserInChatModal: TModal;
  addUserInChatModal: TModal;
  settings?: TPropsSettings;
};

function mapChatToProps(state: Indexed) {
  return {
    user: state.user,
    chats: state.chats,
    active_chat_id: state.active_chat_id,
  };
}

const chatController = new ChatController();
const authController = new AuthController();
class ChatPage<T extends object = TChatPageProps> extends Block<T> {
  constructor() {
    super({
      sideBar: sideBar,
      chatTitle: chatTitle,
      chatList: chatList,
      formSendMessage: formSendMessage,
      createChatModal: createChatModal,
      deleteChatModal: deleteChatModal,
      addUserInChatModal: addUserInChatModal,
      deleteUserInChatModal: deleteUserInChatModal,
      settings: { withInternalID: true },

      events: {
        submit: async (e: Event) => {
          const formData = submitForm(e);
          if (formData) {
            const nameFormData = (e.target as HTMLFormElement).getAttribute(
              "name"
            );

            switch (nameFormData) {
              case "form-create-chat": {
                console.log("форма нового чата");
                await chatController.createChat(formData as TCreateChatData);
                chatController.renderChats(this as Block<TChatPageProps>);
                break;
              }
              case "form-send-msg": {
                console.log("форма отправка смс");
                break;
              }
              case "form-delete-chat": {
                console.log("удаление чата");
                const active_chat_id = (this.props as TChatPageProps)
                  .active_chat_id as number;
                await chatController.deleteChat({ chatId: active_chat_id });
                await chatController.renderChats(this as Block<TChatPageProps>);
                break;
              }

              case "form-add-user-in-chat": {
                console.log("добавление пользователя");
                await chatController.addUserInChat(formData as TAddUserData);
                break;
              }

              case "form-delete-user-in-chat": {
                console.log("удаление пользователя");
                await chatController.deleteUserInChat(formData as TAddUserData);
                break;
              }

              default:
                break;
            }
          }
        },
      },
    });
  }

  async componentDidMount(): Promise<void> {
    console.log("ChatPage didMount");

    await authController.getUser();
    await chatController.getChats();
    labelFocus(".chat-wrapper", ".label__input", "label__span_hidden");

    chatController.renderChats(this as Block<TChatPageProps>);
  }

  render(): DocumentFragment {
    return this.compile(
      chatPageTemplate,
      this.props as Record<string, unknown>
    );
  }
}

export default connect(ChatPage, mapChatToProps);
export { TChatPageProps };
