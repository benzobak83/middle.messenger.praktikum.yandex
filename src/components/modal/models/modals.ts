import {
  closeAddUserInChatModalBtn,
  closeCreateChatModalBtn,
  closeDeleteChatModalBtn,
  closeDeleteUserInChatModalBtn,
  sendFormAddUserInChatButton,
  sendFormCreateNameChatButton,
  sendFormDeleteChatButton,
  sendFormDeleteUserInChatButton,
} from "../../button/models/buttons";

import {
  createChatModalInput,
  userIdForDeleteModalInput,
  userIdModalInput,
} from "../../input/models/inputs";
import { Modal } from "../modal";

const createChatModal = new Modal({
  inputModal: createChatModalInput,
  spanName: "Название чата",
  titleText: "Создать чат",
  formName: "form-create-chat",
  buttonModal: sendFormCreateNameChatButton,
  closeCreateChatModalBtn: closeCreateChatModalBtn,
  isShowModal: false,
});

const deleteChatModal = new Modal({
  titleText: "Удалить чат?",
  formName: "form-delete-chat",
  buttonModal: sendFormDeleteChatButton,
  closeCreateChatModalBtn: closeDeleteChatModalBtn,
  isShowModal: false,
});

const addUserInChatModal = new Modal({
  inputModal: userIdModalInput,
  titleText: "Добавить пользователя в чат",
  spanName: "Введите id пользователя",
  formName: "form-add-user-in-chat",
  buttonModal: sendFormAddUserInChatButton,
  closeCreateChatModalBtn: closeAddUserInChatModalBtn,
  isShowModal: false,
});

const deleteUserInChatModal = new Modal({
  inputModal: userIdForDeleteModalInput,
  titleText: "Удалить пользователя из чата",
  spanName: "Введите id пользователя",
  formName: "form-delete-user-in-chat",
  buttonModal: sendFormDeleteUserInChatButton,
  closeCreateChatModalBtn: closeDeleteUserInChatModalBtn,
  isShowModal: false,
});
export {
  createChatModal,
  deleteChatModal,
  addUserInChatModal,
  deleteUserInChatModal,
};
