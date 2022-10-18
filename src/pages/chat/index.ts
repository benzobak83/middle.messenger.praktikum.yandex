import "../../global-styles/global.scss";
import "./chat.scss";
import "../../components/userDialog/userDialog.scss";
import "../../components/sideBar/sideBar.scss";
import "../../components/chatTitle/chatTitle.scss";
import "../../components/chatList/chatList.scss";
import "../../components/chatMessage/chatMessage.scss";
import "../../components/formSendMessage/formSendMessage.scss";
import "../../components/menuHover/menuHover.scss";
import "../../components/menuHoverItem/menuHoverItem.scss";

import { toggleFunction } from "../../utils/toggleFunction";

document.addEventListener("DOMContentLoaded", (e) => {
  toggleFunction(
    "#snippet-msg",
    ".form-msg__menu-hover",
    "form-msg__menu-hover_hidden"
  );
  toggleFunction(
    ".chat-title__utils",
    ".chat-title__menu-hover",
    "chat-title__menu-hover_hidden"
  );
});
