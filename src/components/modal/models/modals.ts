import {
  closeAddUserInChatModalBtn,
  closeCreateChatModalBtn,
  closeDeleteChatModalBtn,
  closeDeleteUserInChatModalBtn,
  closeEditPhotoInChatModalBtn,
  sendFormAddUserInChatButton,
  sendFormCreateNameChatButton,
  sendFormDeleteChatButton,
  sendFormDeleteUserInChatButton,
  sendFormEditPhotoInChatButton,
} from "../../button/models/buttons";

import {
  createChatModalInput,
  photoChatModalInput,
  userIdForDeleteModalInput,
  userIdModalInput,
} from "../../input/models/inputs";
import Modal from "../modal";
import default_avatar from "../../../../static/img/default_avatar.png";

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
  classModal: "modal__delete-user",
  titleText: "Выберите пользователей для удаления",
  needUsersList: true,
  default_avatar: default_avatar,
  spanName: "Введите id пользователя",
  formName: "form-delete-user-in-chat",
  buttonModal: sendFormDeleteUserInChatButton,
  closeCreateChatModalBtn: closeDeleteUserInChatModalBtn,
  isShowModal: false,
  events: {
    click: (e: Event) => {
      const user = (e.target as HTMLElement).closest("li");
      if (!user) return;

      const idUser = user.dataset.id;
      if (!idUser) return;

      if ((user.dataset.selected as unknown) == "true") {
        (user.dataset.selected as unknown) = "false";
      } else {
        (user.dataset.selected as unknown) = "true";
      }
    },
  },
});
const editPhotoInChatModal = new Modal({
  inputModal: photoChatModalInput,
  titleText: "Изменить фото чата",
  spanName: "Выберите фото",
  formName: "form-edit-photo-in-chat",
  buttonModal: sendFormEditPhotoInChatButton,
  closeCreateChatModalBtn: closeEditPhotoInChatModalBtn,
  isShowModal: false,
});
export {
  createChatModal,
  deleteChatModal,
  addUserInChatModal,
  deleteUserInChatModal,
  editPhotoInChatModal,
};
