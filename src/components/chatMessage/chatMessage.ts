import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { chatMessageTemplate } from "./chatMessage.tmpl";

type TChatMessage = {
  isUser?: boolean;
  isReaded?: boolean;
  messageText: string;
  messageDate?: string;
  events?: Record<string, (e: Event) => void>;
  settings?: TPropsSettings;
};

class ChatMessage extends Block<TChatMessage> {
  constructor(props: TChatMessage) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatMessageTemplate, this.props);
  }
}

export { ChatMessage, TChatMessage };
