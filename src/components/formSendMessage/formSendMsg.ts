import { Block } from "../../core/block/block";
import { formSendMsgTemplate } from "./formSendMessage.tmpl";
import { Button } from "../button/button";

type TFormSendMsg = {
  formMsgSendBtn: Button;
  formMsgUtilsBtn: Button;
  events?: Record<string, (event: Event) => void>;
  settings?: Record<string, boolean>;
};

class FormSendMsg extends Block {
  constructor(props: TFormSendMsg) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(formSendMsgTemplate, this.props);
  }
}

export { FormSendMsg, TFormSendMsg };
