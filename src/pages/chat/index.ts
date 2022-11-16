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
import { Input } from "../../components/input/input";
import { profileCreateChatModal } from "../../components/modal/models/modals";
import { submitForm } from "../../utils/submitForm";
import {
  ChatController,
  TArrayChats,
  TChat,
} from "../../controllers/ChatController";
import { TCreateChatData } from "../../api/ChatAPI";
import { router } from "../../index";
import { routerPath } from "../../core/router/routerPathVar";
import { UserDialog } from "../../components/userDialog/userDialog";

type TChatPageProps = {
  sideBar: SideBar;
  chatTitle: ChatTitle;
  chatList: ChatList;
  formSendMessage: FormSendMsg;
  createChatModalInput: Input;
  active_chat_id?: number;
  settings?: TPropsSettings;
};

function mapChatToProps(state: Indexed) {
  return {
    user: state.user,
    chats: state.chats,
  };
}

const chatController = new ChatController();
class ChatPage<T extends object = TChatPageProps> extends Block<T> {
  constructor() {
    super({
      sideBar: sideBar,
      chatTitle: chatTitle,
      chatList: chatList,
      formSendMessage: formSendMessage,
      profileCreateChatModal: profileCreateChatModal,
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
                chatController.renderChats(this);
                break;
              }
              case "form-send-msg": {
                console.log("форма отправка смс");
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
    const authController = new AuthController();
    await authController.getUser();
    await chatController.getChats();

    chatController.renderChats(this);
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
