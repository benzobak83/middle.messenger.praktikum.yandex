import { SideBar } from "../sideBar";
import { createNewChatBtn, goToProfileBtn } from "../../button/models/buttons";
import { chatSearchInputChat } from "../../input/models/inputs";

const sideBar = new SideBar({
  userDialogs: [],
  chatSearchInputChat: chatSearchInputChat,
  goToProfileBtn: goToProfileBtn,
  createNewChatBtn: createNewChatBtn,
  settings: { withInternalID: true },
});

export { sideBar };
