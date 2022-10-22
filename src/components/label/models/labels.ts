import { Label } from "../label";

const labelEmail = new Label({
  id: "email",
  span_name: "Почта",
  type: "email",
  settings: { withInternalID: true },
});
const labelLogin = new Label({
  id: "login",
  span_name: "Логин",
  type: "text",
  settings: { withInternalID: true },
});
const labelFirstName = new Label({
  id: "first_name",
  span_name: "Имя",
  type: "text",
  settings: { withInternalID: true },
});
const labelSecondName = new Label({
  id: "second_name",
  span_name: "Фамилия",
  type: "text",
  settings: { withInternalID: true },
});
const labelPhone = new Label({
  id: "phone",
  span_name: "Телефон",
  type: "text",
  settings: { withInternalID: true },
});
const labelPassword = new Label({
  id: "password",
  span_name: "Пароль",
  type: "password",
  settings: { withInternalID: true },
});
const labelPasswordConfirm = new Label({
  id: "password-confirm",
  span_name: "Подтверждение пароля",
  type: "password",
  settings: { withInternalID: true },
});

export {
  labelEmail,
  labelLogin,
  labelFirstName,
  labelSecondName,
  labelPhone,
  labelPassword,
  labelPasswordConfirm,
};
