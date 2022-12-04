import { Block } from "../../core/block/block";
import { sideBarTemplate } from "./sideBar.tmpl";
import { UserDialog } from "../userDialog/userDialog";
import { TPropsSettings } from "../../utils/types";
import { Button } from "../button/button";
import { Input } from "../input/input";

type TSideBar = {
  userDialogs: Array<UserDialog>;
  events?: Record<string, (e: Event) => void>;
  goToProfileBtn: Button;
  chatSearchInputChat: Input;
  createNewChatBtn: Button;
  settings?: TPropsSettings;
};

class SideBar extends Block<TSideBar> {
  constructor(props: TSideBar) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(sideBarTemplate, this.props);
  }
}

export { SideBar, TSideBar };
