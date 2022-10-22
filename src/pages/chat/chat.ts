import { Block } from "../../core/block/block";
import { chatPageTemplate } from "./chat.tmpl";

class ChatPage extends Block {
  constructor(props: object) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(chatPageTemplate, this.props);
  }
}

export { ChatPage };
