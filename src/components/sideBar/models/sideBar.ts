import { SideBar } from "../sideBar";
import { userDialogs } from "../../userDialog/models/userDialogs";
import { goToProfileBtn } from "../../button/models/buttons";

const sideBar = new SideBar({
  userDialogs: userDialogs,
  goToProfileBtn: goToProfileBtn,
  settings: { withInternalID: true },
});

export { sideBar };
