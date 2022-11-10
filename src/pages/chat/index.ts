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
import { TPropsSettings } from "../../utils/types";
import { sideBar } from "../../components/sideBar/models/sideBar";
import { chatTitle } from "../../components/chatTitle/models/chatTitle";
import { chatList } from "../../components/chatList/models/chatList";
import { formSendMessage } from "../../components/formSendMessage/models/formSendMessage";

type TChatPageProps = {
  sideBar: SideBar;
  chatTitle: ChatTitle;
  chatList: ChatList;
  formSendMessage: FormSendMsg;
  settings?: TPropsSettings;
};
class ChatPage extends Block<TChatPageProps> {
  constructor() {
    super({
      sideBar: sideBar,
      chatTitle: chatTitle,
      chatList: chatList,
      formSendMessage: formSendMessage,
      settings: { withInternalID: true },
    });
  }
  render(): DocumentFragment {
    return this.compile(chatPageTemplate, this.props);
  }
}

export { ChatPage };
