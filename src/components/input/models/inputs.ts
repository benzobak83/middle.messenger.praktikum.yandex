import { filteredNumber, validateInput } from "../../../utils/validationForm";
import { Input } from "../input";

const VALIDATION_EVENTS = {
  focus: validateInput,
  blur: validateInput,
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
  classInput: "profile__info-value",
  events: VALIDATION_EVENTS,
});

const newPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "newPassword",
  classInput: "profile__info-value",
  events: VALIDATION_EVENTS,
});

const repeatPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "password-confirm",
  classInput: "profile__info-value",
  events: VALIDATION_EVENTS,
});

const emailInputAuth = new Input({
  idInput: "email",
  nameInput: "email",
  placeholderInput: "??????????",
  typeInput: "email",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const loginInputAuth = new Input({
  idInput: "login",
  nameInput: "login",
  placeholderInput: "??????????",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const loginInputLogin = new Input({
  idInput: "login",
  nameInput: "login",
  placeholderInput: "??????????",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const firstNameInputAuth = new Input({
  idInput: "first_name",
  nameInput: "first_name",
  placeholderInput: "??????",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const secondNameInputAuth = new Input({
  idInput: "second_name",
  nameInput: "second_name",
  placeholderInput: "??????????????",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const phoneInputAuth = new Input({
  idInput: "phone",
  nameInput: "phone",
  placeholderInput: "??????????????",
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
  placeholderInput: "????????????",
  typeInput: "password",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});

const passwordInputLogin = new Input({
  idInput: "password",
  nameInput: "password",
  placeholderInput: "????????????",
  typeInput: "password",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: VALIDATION_EVENTS,
});
const passwordConfirmInputAuth = new Input({
  idInput: "password-confirm",
  nameInput: "password-confirm",
  placeholderInput: "?????????????????????????? ????????????",
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
  placeholderInput: "??????????????????",
  autocomplete: "off",
  events: VALIDATION_EVENTS,
});

const createChatModalInput = new Input({
  typeInput: "text",
  classInput: "label__input modal__input",
  nameInput: "title",
  idInput: "name_chat",
  placeholderInput: "???????????????? ????????",
  autocomplete: "off",
});

const userIdModalInput = new Input({
  typeInput: "text",
  classInput: "label__input modal__input",
  nameInput: "users",
  idInput: "add_users_chat_input",
  placeholderInput: "?????????????? id ????????????????????????",
  autocomplete: "off",
});

const userIdForDeleteModalInput = new Input({
  typeInput: "text",
  classInput: "label__input modal__input",
  nameInput: "users",
  idInput: "delete_users_chat_input",
  placeholderInput: "?????????????? id ????????????????????????",
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
};
