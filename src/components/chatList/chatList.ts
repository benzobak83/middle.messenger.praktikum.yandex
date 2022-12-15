import { Block } from "../../core/block/block";
import { chatListTemplate } from "./chatList.tmpl";
import { ChatMessage, TChatMessage } from "../chatMessage/chatMessage";
import { Indexed, TPropsSettings } from "../../utils/types";
import { connect } from "../../utils/connect";
import { store } from "../../core/store/Store";
import { ChatController } from "../../controllers/ChatController";
import { chatScrollBottom } from "../../pages/chat/utils/chatScrollBottom";

const chatController = new ChatController();

function mapChatToChildrens(state: Indexed) {
  const chatId = store.getState().active_chat_id;
  if (!state.message || !state.message[chatId]) return;
  const arrayMessages = state.message[chatId];

  const filteredArrayMessages = chatController.renameMessages(arrayMessages);

  return {
    messages: filteredArrayMessages
      .filter((message) => {
        if (message !== null) return true;
      })
      .map((message) => {
        return new ChatMessage({ ...message } as TChatMessage);
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

  protected _componentDidUpdate(oldProps: T, newProps: T): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) return;
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    chatScrollBottom();
  }

  componentDidUnmount(): void {
    console.log("unmount");
    this.isMounted = false;
  }

  render(): DocumentFragment {
    return this.compile(chatListTemplate, this.props as TChatList);
  }
}

export { TChatList };
export default connect(ChatList, { mapStateToChildrens: mapChatToChildrens });
