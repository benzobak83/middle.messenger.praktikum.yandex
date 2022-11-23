import { formMsgSendBtn, formMsgUtilsBtn } from "../../button/models/buttons";
import { FormSendMsg } from "../formSendMsg";
import { msgTextAreaInputChat } from "../../input/models/inputs";

const formSendMessage = new FormSendMsg({
  formMsgSendBtn: formMsgSendBtn,
  formMsgUtilsBtn: formMsgUtilsBtn,
  msgTextAreaInputChat: msgTextAreaInputChat,
  settings: { withInternalID: true },
});

export { formSendMessage };
