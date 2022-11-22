import { SideBar } from "../sideBar";
import { createNewChatBtn, goToProfileBtn } from "../../button/models/buttons";

const sideBar = new SideBar({
  userDialogs: [],
  goToProfileBtn: goToProfileBtn,
  createNewChatBtn: createNewChatBtn,
  settings: { withInternalID: true },
});

export { sideBar };
