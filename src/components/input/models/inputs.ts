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
});

const newPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "newPassowrd",
});

const repeatPasswordInputProfile = new Input({
  typeInput: "password",
  nameInput: "repeat_password",
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
};
