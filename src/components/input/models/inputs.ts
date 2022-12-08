import { movingSearchImg } from "../../../pages/chat/utils/movingSearchImg";
import { searchChatsByName } from "../../../pages/chat/utils/searchChatsByName";
import { filteredNumber, validateInput } from "../../../utils/validationForm";
import { Input } from "../input";

const VALIDATION_EVENTS = {
  focus: validateInput,
  blur: validateInput,
};

const SEARCH_EVENTS = {
  focus: movingSearchImg.focus,
  blur: movingSearchImg.blur,
  input: searchChatsByName,
};

const avatarInputProfile = new Input({
  typeInput: "file",
  nameInput: "avatar",
  idInput: "avatar",
  hidden: true,
});

const emailInputProfile = new Input({
  typeInput: "text",
  nameInput: "email",
  valueInput: "example@mail.ru",
  classInput: "profile__info-value",
  readonly: true,
  events: VALIDATION_EVENTS,
});

const loginInputProfile = new Input({
  typeInput: "text",
  nameInput: "login",
  valueInput: "example666",
  classInput: "profile__info-value",
  readonly: true,
  events: VALIDATION_EVENTS,
});

const nameInputProfile = new Input({
  typeInput: "text",
  nameInput: "first_name",
  valueInput: "Viktor",
  classInput: "profile__info-value",
  readonly: true,
  events: VALIDATION_EVENTS,
});

const secondNameInputProfile = new Input({
  typeInput: "text",
  nameInput: "second_name",
  valueInput: "Pupkin",
  classInput: "profile__info-value",
  readonly: true,
  events: VALIDATION_EVENTS,
});

const displayNameInputProfile = new Input({
  typeInput: "text",
  nameInput: "display_name",
  valueInput: "CHECK123",
  classInput: "profile__info-value",
  readonly: true,
  events: VALIDATION_EVENTS,
});

const phoneInputProfile = new Input({
  typeInput: "text",
  nameInput: "phone",
  valueInput: "89963221234",
  classInput: "profile__info-value",
  readonly: true,
  events: {
    input: (e) => filteredNumber(e),
    ...VALIDATION_EVENTS,
  },
});

const oldPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "oldPassword",
  autocomplete: "false",
  classInput: "profile__info-value",
  events: VALIDATION_EVENTS,
});

const newPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "newPassword",
  autocomplete: "false",
  classInput: "profile__info-value",
  events: VALIDATION_EVENTS,
});

const repeatPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "password-confirm",
  autocomplete: "false",
  classInput: "profile__info-value",
  events: VALIDATION_EVENTS,
});

const emailInputAuth = new Input({
  idInput: "email",
  nameInput: "email",
  placeholderInput: "Почта",
  typeInput: "email",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const loginInputAuth = new Input({
  idInput: "login",
  nameInput: "login",
  placeholderInput: "Логин",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const loginInputLogin = new Input({
  idInput: "login",
  nameInput: "login",
  placeholderInput: "Логин",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const firstNameInputAuth = new Input({
  idInput: "first_name",
  nameInput: "first_name",
  placeholderInput: "Имя",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const secondNameInputAuth = new Input({
  idInput: "second_name",
  nameInput: "second_name",
  placeholderInput: "Фамилия",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const phoneInputAuth = new Input({
  idInput: "phone",
  nameInput: "phone",
  placeholderInput: "Телефон",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: {
    input: (e) => filteredNumber(e),
    ...VALIDATION_EVENTS,
  },
});

const passwordInputAuth = new Input({
  idInput: "password",
  nameInput: "password",
  placeholderInput: "Пароль",
  typeInput: "password",
  classInput: "label__input",
  autocomplete: "false",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const passwordInputLogin = new Input({
  idInput: "password",
  nameInput: "password",
  placeholderInput: "Пароль",
  autocomplete: "false",
  typeInput: "password",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});
const passwordConfirmInputAuth = new Input({
  idInput: "password-confirm",
  nameInput: "password-confirm",
  placeholderInput: "Подтверждение пароля",
  autocomplete: "false",
  typeInput: "password",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});
const msgTextAreaInputChat = new Input({
  typeInput: "messagearea",
  classInput: "form-msg__messagearea",
  nameInput: "message",
  idInput: "message",
  placeholderInput: "Сообщение",
  autocomplete: "off",
  events: VALIDATION_EVENTS,
});
const chatSearchInputChat = new Input({
  typeInput: "text",
  classInput: "side-bar__search-input",
  nameInput: "search",
  idInput: "search",
  placeholderInput: "Поиск",
  autocomplete: "off",
  events: SEARCH_EVENTS,
});

const createChatModalInput = new Input({
  typeInput: "text",
  classInput: "label__input modal__input",
  nameInput: "title",
  idInput: "name_chat",
  placeholderInput: "Название чата",
  autocomplete: "off",
});

const userIdModalInput = new Input({
  typeInput: "text",
  classInput: "label__input modal__input",
  nameInput: "login",
  idInput: "add_users_chat_input",
  placeholderInput: "Введите логин пользователя",
  autocomplete: "off",
});

const userIdForDeleteModalInput = new Input({
  typeInput: "text",
  classInput: "label__input modal__input",
  nameInput: "users",
  idInput: "delete_users_chat_input",
  placeholderInput: "Введите логин пользователя",
  autocomplete: "off",
});
const photoChatModalInput = new Input({
  typeInput: "file",
  classInput: "label__input modal__input",
  nameInput: "avatar",
  idInput: "edit_photo_chat_input",
  placeholderInput: "Выбрать фото",
  autocomplete: "off",
});

export {
  createChatModalInput,
  avatarInputProfile,
  emailInputProfile,
  loginInputProfile,
  nameInputProfile,
  secondNameInputProfile,
  displayNameInputProfile,
  phoneInputProfile,
  oldPasswordInputProfile,
  newPasswordInputProfile,
  repeatPasswordInputProfile,
  emailInputAuth,
  loginInputAuth,
  firstNameInputAuth,
  secondNameInputAuth,
  phoneInputAuth,
  passwordInputAuth,
  passwordConfirmInputAuth,
  msgTextAreaInputChat,
  loginInputLogin,
  passwordInputLogin,
  userIdModalInput,
  userIdForDeleteModalInput,
  chatSearchInputChat,
  photoChatModalInput,
};
