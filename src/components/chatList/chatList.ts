import { Block } from "../../core/block/block";
import { chatListTemplate } from "./chatList.tmpl";
import { ChatMessage } from "../chatMessage/chatMessage";

type TChatList = {
  messages: Array<ChatMessage>;
  events?: Record<string, (e: Event) => void>;
  settings?: Record<string, boolean>;
};

class ChatList extends Block {
  constructor(props: TChatList) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatListTemplate, this.props);
  }
}

export { ChatList, TChatList };
