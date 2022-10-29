import { Block } from "../../core/block/block";
import { chatPageTemplate } from "./chat.tmpl";
import { SideBar } from "../../components/sideBar/sideBar";
import { ChatTitle } from "../../components/chatTitle/chatTitle";
import { ChatList } from "../../components/chatList/chatList";
import { FormSendMsg } from "../../components/formSendMessage/formSendMsg";
import { TPropsSettings } from "../../utils/types";

type TChatPageProps = {
  sideBar: SideBar;
  chatTitle: ChatTitle;
  chatList: ChatList;
  formSendMessage: FormSendMsg;
  settings?: TPropsSettings;
};
class ChatPage extends Block<TChatPageProps> {
  constructor(props: TChatPageProps) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(chatPageTemplate, this.props);
  }
}

export { ChatPage };
