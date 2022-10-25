import { Block } from "../../core/block/block";
import { userDialogTemplate } from "./userDialog.tmpl";

type TUserDialog = {
  count_unreaded_msg?: number | null;
  src_avatar?: string;
  ["last-msg"]?: string;
  date_msg: string;
  nameUser: string;
  events?: Record<string, (event: Event) => void>;
  settings?: Record<string, boolean>;
};

class UserDialog extends Block {
  constructor(props: TUserDialog) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(userDialogTemplate, this.props);
  }
}

export { UserDialog, TUserDialog };
