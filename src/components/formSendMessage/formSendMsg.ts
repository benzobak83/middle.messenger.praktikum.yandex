import { Block } from "../../core/block/block";
import { formSendMsgTemplate } from "./formSendMessage.tmpl";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { TPropsSettings } from "../../utils/types";

type TFormSendMsg = {
  formMsgSendBtn: Button;
  formMsgUtilsBtn: Button;
  msgTextAreaInputChat: Input;
  events?: Record<string, (e: Event) => void>;
  settings?: TPropsSettings;
};

class FormSendMsg extends Block<TFormSendMsg> {
  constructor(props: TFormSendMsg) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(formSendMsgTemplate, this.props);
  }
}

export { FormSendMsg, TFormSendMsg };
