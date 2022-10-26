import { validateInput } from "../../../utils/validationForm";
import { Input } from "../input";

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
});

const loginInputProfile = new Input({
  typeInput: "text",
  nameInput: "login",
  valueInput: "example666",
  classInput: "profile__info-value",
  readonly: true,
});

const nameInputProfile = new Input({
  typeInput: "text",
  nameInput: "first_name",
  valueInput: "Viktor",
  classInput: "profile__info-value",
  readonly: true,
});

const secondNameInputProfile = new Input({
  typeInput: "text",
  nameInput: "second_name",
  valueInput: "Pupkin",
  classInput: "profile__info-value",
  readonly: true,
});

const displayNameInputProfile = new Input({
  typeInput: "text",
  nameInput: "display_name",
  valueInput: "CHECK123",
  classInput: "profile__info-value",
  readonly: true,
});

const phoneInputProfile = new Input({
  typeInput: "text",
  nameInput: "phone",
  valueInput: "89963221234",
  classInput: "profile__info-value",
  readonly: true,
});

const oldPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "oldPassowrd",
  classInput: "profile__info-value",
});

const newPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "newPassowrd",
  classInput: "profile__info-value",
});

const repeatPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "repeat_password",
  classInput: "profile__info-value",
});

const emailInputAuth = new Input({
  idInput: "email",
  nameInput: "email",
  placeholderInput: "Почта",
  typeInput: "email",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: {
    focus: (e) => validateInput(e),
    blur: (e) => validateInput(e),
  },
});

const loginInputAuth = new Input({
  idInput: "login",
  nameInput: "login",
  placeholderInput: "Логин",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: {
    focus: (e) => validateInput(e),
    blur: (e) => validateInput(e),
  },
});

const firstNameInputAuth = new Input({
  idInput: "first_name",
  nameInput: "first_name",
  placeholderInput: "Имя",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: {
    focus: (e) => validateInput(e),
    blur: (e) => validateInput(e),
  },
});

const secondNameInputAuth = new Input({
  idInput: "second_name",
  nameInput: "second_name",
  placeholderInput: "Фамилия",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: {
    focus: (e) => validateInput(e),
    blur: (e) => validateInput(e),
  },
});

const phoneInputAuth = new Input({
  idInput: "phone",
  nameInput: "phone",
  placeholderInput: "Телефон",
  typeInput: "text",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: {
    focus: (e) => validateInput(e),
    blur: (e) => validateInput(e),
  },
});

const passwordInputAuth = new Input({
  idInput: "password",
  nameInput: "password",
  placeholderInput: "Пароль",
  typeInput: "password",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: {
    focus: (e) => validateInput(e),
    blur: (e) => validateInput(e),
  },
});
const passwordConfirmInputAuth = new Input({
  idInput: "password-confirm",
  nameInput: "password-confirm",
  placeholderInput: "Подтверждение пароля",
  typeInput: "password",
  classInput: "label__input",
  settings: { withInternalID: true },
  events: {
    focus: (e) => validateInput(e),
    blur: (e) => validateInput(e),
  },
});

export {
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
};
