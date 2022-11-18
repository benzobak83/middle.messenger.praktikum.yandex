import { Block } from "../../core/block/block";
import { chatTitleTemplate } from "./chatTitle.tmpl";
import { Button } from "../button/button";
import { TPropsSettings } from "../../utils/types";

type TChatTitle = {
  srcAvatar: string;
  userName: string;
  events?: Record<string, (e: Event) => void>;
  settings?: TPropsSettings;
  chatTitleBtn: Button;
  deleteChatBtn: Button;
  deleteUserInChatBtn: Button;
  addUserInChatBtn: Button;
};

class ChatTitle extends Block<TChatTitle> {
  constructor(props: TChatTitle) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatTitleTemplate, this.props);
  }
}

export { ChatTitle, TChatTitle };
