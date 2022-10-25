import { formMsgSendBtn, formMsgUtilsBtn } from "../../button/models/buttons";
import { FormSendMsg } from "../formSendMsg";
import { submitFormMessage } from "../utils/submitFormMessage";

const formSendMessage = new FormSendMsg({
  formMsgSendBtn: formMsgSendBtn,
  formMsgUtilsBtn: formMsgUtilsBtn,
  events: {
    submit: (event) => console.log(submitFormMessage(event)),
  },
  settings: { withInternalID: true },
});

export { formSendMessage };
