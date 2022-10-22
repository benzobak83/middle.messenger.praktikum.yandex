import { Button } from "../button";

const regBtn = new Button({
  class: "big-button  reg__buttons-reg",
  text: "Зарегистрироваться",
  events: {
    click: (event) => {
      event.preventDefault();
      console.log(event.target);
    },
  },
  settings: { withInternalID: true },
});

const loginBtn = new Button({
  class: "big-button  login__buttons-login",
  text: "Войти",
  events: {
    click: (event) => {
      event.preventDefault();
      console.log(event.target);
    },
  },
  settings: { withInternalID: true },
});

export { regBtn, loginBtn };
