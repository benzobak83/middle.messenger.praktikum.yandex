import { Block } from "../../core/block/block";
import { chatTitleTemplate } from "./chatTitle.tmpl";
import {Button} from '../button/button'

type TChatTitle = {
  srcAvatar: string;
  userName: string;
  events?: Record<string, (event: Event) => void>;
  settings?: Record<string, boolean>;
  chatTitleBtn:Button 
};

class ChatTitle extends Block {
  constructor(props: TChatTitle) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatTitleTemplate, this.props);
  }
}

export { ChatTitle, TChatTitle };
