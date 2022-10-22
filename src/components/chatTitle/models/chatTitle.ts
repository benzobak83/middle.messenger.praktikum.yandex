import { chatTitleBtn } from "../../button/models/buttons";
import { ChatTitle } from "../chatTitle";

const chatTitle = new ChatTitle({
  srcAvatar: "../../../static/img/default_avatar.png",
  userName: "Чек",
  chatTitleBtn: chatTitleBtn,
  settings: { withInternalID: true },
});

export { chatTitle };
