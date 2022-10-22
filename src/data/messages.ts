import { TChatMessage } from "../components/chatMessage/chateMessage";
const messagesData: Array<TChatMessage> = [
  {
    messageText:
      "check check check check check check check check check check check check check check",
    messageDate: "12:10",
    isUser: true,
    isReaded: true,
  },
  {
    messageText: "check completed",
    messageDate: "12:11",
    isUser: false,
  },
  {
    messageText: "it is msg unreaded?",
    messageDate: "12:16",
    isUser: true,
    isReaded: false,
  },
];

export { messagesData };
