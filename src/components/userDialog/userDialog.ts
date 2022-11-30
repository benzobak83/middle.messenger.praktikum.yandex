import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { userDialogTemplate } from "./userDialog.tmpl";

type TUserDialog = {
  count_unreaded_msg?: number | null;
  src_avatar?: string;
  ["last-msg"]?: string;
  date_msg: string;
  nameUser: string;
  events?: Record<string, (e: Event) => void>;
  idChat?: number;
  settings?: TPropsSettings;
};

class UserDialog extends Block<TUserDialog> {
  constructor(props: TUserDialog) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(userDialogTemplate, this.props);
  }
}

export { UserDialog, TUserDialog };
