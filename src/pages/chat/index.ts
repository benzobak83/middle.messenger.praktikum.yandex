import "../../global-styles/global.scss";
import "./chat.scss";
import "../../components/userDialog/userDialog.scss";
import "../../components/sideBar/sideBar.scss";
import "../../components/chatTitle/chatTitle.scss";
import "../../components/chatList/chatList.scss";
import "../../components/chatMessage/chatMessage.scss";
import "../../components/formSendMessage/formSendMessage.scss";

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

type TChatPageProps = {
  sideBar: SideBar;
  chatTitle: ChatTitle;
  chatList: ChatList;
  formSendMessage: FormSendMsg;
  settings?: TPropsSettings;
};

function mapChatToProps(state: Indexed) {
  return {
    user: state.user,
  };
}
class ChatPage<T extends object = TChatPageProps> extends Block<T> {
  constructor() {
    super({
      sideBar: sideBar,
      chatTitle: chatTitle,
      chatList: chatList,
      formSendMessage: formSendMessage,
      settings: { withInternalID: true },
    });
  }

  async componentDidMount(): Promise<void> {
    console.log("ChatPage didMount");
    const authController = new AuthController();
    await authController.getUser();
  }

  render(): DocumentFragment {
    return this.compile(
      chatPageTemplate,
      this.props as Record<string, unknown>
    );
  }
}

export default connect(ChatPage, mapChatToProps);
