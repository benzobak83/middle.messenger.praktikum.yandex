import { Block } from "../../core/block/block";
import { chatMessageTemplate } from "./chatMessage.tmpl";

type TChatMessage = {
  isUser: boolean;
  isReaded?: boolean;
  messageText: string;
  messageDate: string;
  events?: Record<string, (e: Event) => void>;
  settings?: Record<string, boolean>;
};

class ChatMessage extends Block {
  constructor(props: TChatMessage) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatMessageTemplate, this.props);
  }
}

export { ChatMessage, TChatMessage };
