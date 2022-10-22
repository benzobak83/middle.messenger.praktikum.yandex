import { SideBar } from "../sideBar";
import { userDialogs } from "../../userDialog/models/userDialogs";

const sideBar = new SideBar({
  userDialogs: userDialogs,
  events: {
    click: (event) => {
      event.preventDefault();
      console.log(event.target);
    },
  },
  settings: { withInternalID: true },
});

export { sideBar };
