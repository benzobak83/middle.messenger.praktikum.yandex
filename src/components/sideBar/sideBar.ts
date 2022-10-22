import { Block } from "../../core/block/block";
import { sideBarTemplate } from "./sideBar.tmpl";
import { UserDialog } from "../userDialog/userDialog";

type TSideBar = {
  userDialogs: Array<UserDialog>;
  events?: Record<string, (event: Event) => void>;
  settings?: Record<string, boolean>;
};

class SideBar extends Block {
  constructor(props: TSideBar) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(sideBarTemplate, this.props);
  }
}

export { SideBar, TSideBar };
