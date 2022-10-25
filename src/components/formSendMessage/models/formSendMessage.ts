import { formMsgSendBtn, formMsgUtilsBtn } from "../../button/models/buttons";
import { FormSendMsg } from "../formSendMsg";

const formSendMessage = new FormSendMsg({
  formMsgSendBtn: formMsgSendBtn,
  formMsgUtilsBtn: formMsgUtilsBtn,
  settings: { withInternalID: true },
});

export { formSendMessage };
