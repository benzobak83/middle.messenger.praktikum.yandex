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
import ChatTitle from "../../components/chatTitle/chatTitle";
import ChatList from "../../components/chatList/chatList";
import { FormSendMsg } from "../../components/formSendMessage/formSendMsg";
import { TPropsSettings } from "../../utils/types";
import { sideBar } from "../../components/sideBar/models/sideBar";
import { formSendMessage } from "../../components/formSendMessage/models/formSendMessage";
import { connect } from "../../utils/connect";
import { AuthController } from "../../controllers/AuthController";
import {
  addUserInChatModal,
  createChatModal,
  deleteChatModal,
  deleteUserInChatModal,
} from "../../components/modal/models/modals";
import { submitForm } from "../../utils/submitForm";
import { ChatController, TMessage } from "../../controllers/ChatController";
import { TAddUserData, TCreateChatData } from "../../api/ChatAPI";
import { Modal, TModal } from "../../components/modal/modal";
import { labelFocus } from "../../utils/labelFocus";
import { store } from "../../core/store/Store";
import {
  addUserInChatBtn,
  chatTitleBtn,
  deleteChatBtn,
  deleteUserInChatBtn,
} from "../../components/button/models/buttons";
import { Input, TInput } from "../../components/input/input";

type TChatPageProps = {
  sideBar: SideBar;
  chatTitle: typeof ChatTitle;
  chatList: typeof ChatList;
  formSendMessage: FormSendMsg;
  active_chat_id?: number;
  createChatModal: TModal;
  deleteChatModal: TModal;
  deleteUserInChatModal: TModal;
  addUserInChatModal: TModal;
  settings?: TPropsSettings;
};

function mapChatToProps() {
  return {};
}

const chatController = new ChatController();
const authController = new AuthController();
class ChatPage<T extends object = TChatPageProps> extends Block<T> {
  constructor() {
    super({
      sideBar: sideBar,
      chatTitle: new ChatTitle({
        srcAvatar: "./stub",
        chatName: "",
        deleteChatBtn: deleteChatBtn,
        chatTitleBtn: chatTitleBtn,
        addUserInChatBtn: addUserInChatBtn,
        deleteUserInChatBtn: deleteUserInChatBtn,
        settings: { withInternalID: true },
      }),
      chatList: new ChatList({ messages: [] }),
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

                const res = await chatController.createChat(
                  formData as TCreateChatData
                );

                if (!res) return;

                (this.children.createChatModal as Modal).setProps({
                  isShowModal: false,
                } as TModal);
                (
                  this.children.createChatModal.children.inputModal as Input
                ).setProps({
                  valueInput: "",
                  forceUpdate: Math.random(),
                } as TInput);
                chatController.renderChats(this as Block<TChatPageProps>);

                break;
              }
              case "form-send-msg": {
                console.log("форма отправка смс");
                await chatController.sendMessage(formData as TMessage);

                (
                  this.children.formSendMessage.children
                    .msgTextAreaInputChat as Input
                ).setProps({
                  valueInput: "",
                } as TInput);

                break;
              }
              case "form-delete-chat": {
                console.log("удаление чата");
                const active_chat_id = store.getState()
                  .active_chat_id as number;
                await chatController.deleteChat({ chatId: active_chat_id });
                await chatController.renderChats(this as Block<TChatPageProps>);

                (this.children.deleteChatModal as Modal).setProps({
                  isShowModal: false,
                } as TModal);
                break;
              }

              case "form-add-user-in-chat": {
                console.log("добавление пользователя");

                const res = await chatController.addUserInChat(
                  formData as TAddUserData
                );

                if (!res) return;

                (this.children.addUserInChatModal as Modal).setProps({
                  isShowModal: false,
                } as TModal);
                (
                  this.children.addUserInChatModal.children.inputModal as Input
                ).setProps({
                  valueInput: "",
                  forceUpdate: Math.random(),
                } as TInput);
                break;
              }

              case "form-delete-user-in-chat": {
                console.log("удаление пользователя");

                const res = await chatController.deleteUserInChat(
                  formData as TAddUserData
                );

                if (!res) return;

                (this.children.deleteUserInChatModal as Modal).setProps({
                  isShowModal: false,
                } as TModal);
                (
                  this.children.deleteUserInChatModal.children
                    .inputModal as Input
                ).setProps({
                  valueInput: "",
                  forceUpdate: Math.random(),
                } as TInput);
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
    labelFocus(".chat-wrapper", ".label__input", "label__span_hidden");

    await authController.getUser();
    await chatController.getChats();
    await chatController.connectAll();
    store.getState();

    chatController.renderChats(this as Block<TChatPageProps>);
  }

  render(): DocumentFragment {
    return this.compile(
      chatPageTemplate,
      this.props as Record<string, unknown>
    );
  }
}

export default connect(ChatPage, { mapStateToProps: mapChatToProps });
export { TChatPageProps };
