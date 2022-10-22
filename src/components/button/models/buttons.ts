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

const chatTitleBtn = new Button({
  text: '<img src="../../../static/img/utils.svg" alt="Utils" id="chat-title-utils" class="chat-title__utils-img"',
  type: "button",
  settings: { withInternalID: true },
});

export { regBtn, loginBtn, chatTitleBtn };
