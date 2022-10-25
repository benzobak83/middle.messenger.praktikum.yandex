import { SideBar } from "../sideBar";
import { userDialogs } from "../../userDialog/models/userDialogs";

const sideBar = new SideBar({
  userDialogs: userDialogs,
  settings: { withInternalID: true },
});

export { sideBar };
