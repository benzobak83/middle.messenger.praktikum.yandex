import { formMsgSendBtn, formMsgUtilsBtn } from "../../button/models/buttons";
import { FormSendMsg } from "../formSendMsg";
import { submitForm } from "../../../utils/submitForm";

const formSendMessage = new FormSendMsg({
  formMsgSendBtn: formMsgSendBtn,
  formMsgUtilsBtn: formMsgUtilsBtn,
  events: {
    submit: (event) => submitForm(event),
  },
  settings: { withInternalID: true },
});

export { formSendMessage };
