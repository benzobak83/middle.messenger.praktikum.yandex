import "../../global-styles/global.scss";
import "./chat.scss";
import "../../components/userDialog/userDialog.scss";
import "../../components/sideBar/sideBar.scss";
import "../../components/chatTitle/chatTitle.scss";
import "../../components/chatList/chatList.scss";
import "../../components/chatMessage/chatMessage.scss";
import "../../components/formSendMessage/formSendMessage.scss";

import { ChatPage } from "./chat";
import { render } from "../../utils/render";
import { sideBar } from "../../components/sideBar/models/sideBar";
import { chatTitle } from "../../components/chatTitle/models/chatTitle";
import { chatList } from "../../components/chatList/models/chatList";
import { formSendMessage } from "../../components/formSendMessage/models/formSendMessage";

const chatPage = new ChatPage({
  sideBar: sideBar,
  chatTitle: chatTitle,
  chatList: chatList,
  formSendMessage: formSendMessage,
  settings: { withInternalID: true },
});

render(".root", chatPage);
