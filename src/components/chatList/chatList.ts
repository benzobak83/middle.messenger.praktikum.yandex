import { Block } from "../../core/block/block";
import { chatListTemplate } from "./chatList.tmpl";
import { ChatMessage } from "../chatMessage/chatMessage";
import { Indexed, TPropsSettings } from "../../utils/types";
import { connect } from "../../utils/connect";
import { store } from "../../core/store/Store";
import { ChatController } from "../../controllers/ChatController";

const chatController = new ChatController();

function mapChatToChildrens(state: Indexed) {
  const chatId = store.getState().active_chat_id;
  if (!state.message || !state.message[chatId]) return;
  const arrayMessages = state.message[chatId];

  const filteredArrayMessages = chatController.renameMessages(arrayMessages);
  return {
    messages: filteredArrayMessages.map((message) => {
      return new ChatMessage({ ...message });
    }),
  };
}

type TChatList = {
  messages: Array<ChatMessage>;
  events?: Record<string, (e: Event) => void>;
  settings?: TPropsSettings;
};

class ChatList<T extends object = TChatList> extends Block<T> {
  constructor(props: TChatList) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatListTemplate, this.props as TChatList);
  }
}

export { TChatList };
export default connect(ChatList, { mapStateToChildrens: mapChatToChildrens });
