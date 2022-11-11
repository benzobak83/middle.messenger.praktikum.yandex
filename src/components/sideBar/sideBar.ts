import { Block } from "../../core/block/block";
import { sideBarTemplate } from "./sideBar.tmpl";
import { UserDialog } from "../userDialog/userDialog";
import { TPropsSettings } from "../../utils/types";
import { Button } from "../button/button";

type TSideBar = {
  userDialogs: Array<UserDialog>;
  events?: Record<string, (e: Event) => void>;
  goToProfileBtn: Button;
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
