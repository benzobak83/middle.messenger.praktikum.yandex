import { Block } from "../../core/block/block";
import { chatListTemplate } from "./chatList.tmpl";
import { ChatMessage } from "../chatMessage/chatMessage";
import { TPropsSettings } from "../../utils/types";

type TChatList = {
  messages: Array<ChatMessage>;
  events?: Record<string, (e: Event) => void>;
  settings?: TPropsSettings;
};

class ChatList extends Block<TChatList> {
  constructor(props: TChatList) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatListTemplate, this.props);
  }
}

export { ChatList, TChatList };
