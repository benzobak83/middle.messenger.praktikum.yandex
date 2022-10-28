import { formMsgSendBtn, formMsgUtilsBtn } from "../../button/models/buttons";
import { FormSendMsg } from "../formSendMsg";
import { submitForm } from "../../../utils/submitForm";
import { msgTextAreaInputChat } from "../../input/models/inputs";

const formSendMessage = new FormSendMsg({
  formMsgSendBtn: formMsgSendBtn,
  formMsgUtilsBtn: formMsgUtilsBtn,
  msgTextAreaInputChat: msgTextAreaInputChat,
  events: {
    submit: (e: Event) => submitForm(e),
  },
  settings: { withInternalID: true },
});

export { formSendMessage };
