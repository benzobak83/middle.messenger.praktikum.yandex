import {
  addUserInChatBtn,
  chatTitleBtn,
  deleteChatBtn,
  deleteUserInChatBtn,
} from "../../button/models/buttons";
import { ChatTitle } from "../chatTitle";

const chatTitle = new ChatTitle({
  srcAvatar: "../../../static/img/default_avatar.png",
  userName: "Чек",
  deleteChatBtn: deleteChatBtn,
  chatTitleBtn: chatTitleBtn,
  addUserInChatBtn: addUserInChatBtn,
  deleteUserInChatBtn: deleteUserInChatBtn,
  settings: { withInternalID: true },
});

export { chatTitle };
