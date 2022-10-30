import { ChatMessage } from "../chatMessage";
import { messagesData } from "../../../data/messages";

const messages: Array<ChatMessage> = [];

messagesData.forEach((messageProps) => {
  const messageElement = new ChatMessage({
    ...messageProps,
    settings: { withInternalID: true },
  });
  messages.push(messageElement);
});

export { messages };
