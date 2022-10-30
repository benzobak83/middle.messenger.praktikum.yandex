import { ChatList } from "../chatList";
import { messages } from "../../chatMessage/models/chatMessage";

const chatList = new ChatList({
  messages: messages,
  settings: { withInternalID: true },
});

export { chatList };
