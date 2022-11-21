import { TMessageResponse } from "../../../controllers/ChatController";
import { store } from "../../../core/store/Store";

function renameMessages(messages: TMessageResponse[]): Record<string, any> {
  return messages.map((message: TMessageResponse) => {
    return {
      messageText: message.content,
      messageDate: new Date(message.time),
      isUser: message.user_id === store.getState().user.id,
      isReaded: message.is_read,
    };
  });
}

export { renameMessages };
