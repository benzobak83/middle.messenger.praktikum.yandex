import {
  closeCreateChatModalBtn,
  sendFormCreateNameChatButton,
} from "../../button/models/buttons";
import { createChatModalInput } from "../../input/models/inputs";
import { Modal } from "../modal";

const profileCreateChatModal = new Modal({
  inputModal: createChatModalInput,
  formName: "form-create-chat",
  buttonModal: sendFormCreateNameChatButton,
  closeCreateChatModalBtn: closeCreateChatModalBtn,
  isShowModal: false,
});

export { profileCreateChatModal };
