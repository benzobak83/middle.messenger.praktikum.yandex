import { Button } from "../button";
import { toggleHoverMenu } from "../../../pages/chat/utils/toggleHoverMenu";
import { activeChangePassword } from "../../../pages/profile/utils/chagePassword";

const regBtn = new Button({
  class: "big-button  reg__buttons-reg",
  text: "Зарегистрироваться",
  settings: { withInternalID: true },
});

const loginBtn = new Button({
  class: "big-button  login__buttons-login",
  text: "Войти",
  settings: { withInternalID: true },
});

const chatTitleBtn = new Button({
  class: "chat-title__utils-btn",
  text: '<img src="../../../static/img/utils.svg" alt="Utils" id="chat-title-utils" class="chat-title__utils-img"',
  type: "button",
  events: {
    click: toggleHoverMenu,
  },
  settings: { withInternalID: true },
});

const formMsgUtilsBtn = new Button({
  text: '<img src="../../../static/img/snippet.svg" alt="Utils" class="form-msg__utils-img"',
  id: "snippet-msg",
  type: "button",
  events: {
    click: toggleHoverMenu,
  },
  settings: { withInternalID: true },
});

const formMsgSendBtn = new Button({
  text: '<img src="../../../static/img/arrow-right.svg" class="form-msg__btn-send-img" alt="Send">',
  id: "btn-msg-submit",
  type: "submit",
  class: "form-msg__btn-send",
  settings: { withInternalID: true },
});

const saveInfoProfileBtn = new Button({
  text: "Сохранить",
  id: "profile-edit-save",
  type: "submit",
  class: "profile__btn profile__btn_save",
  settings: { withInternalID: true },
});

const editPasswordProfileBtn = new Button({
  text: "Изменить пароль",
  id: "profile-edit-password",
  type: "button",
  class: "profile__btn",
  settings: { withInternalID: true },
  events: {
    click: activeChangePassword,
  },
});

const exitProfileBtn = new Button({
  text: "Выйти",
  id: "profile-unlogin",
  type: "button",
  href: "../login/login.html",
  class: "profile__btn profile__btn_red",
  settings: { withInternalID: true },
});

const saveChangePasswordProfileBtn = new Button({
  text: "Сохранить",
  id: "profile-change-password-save",
  type: "submit",
  class: "profile__btn profile__btn_save",
  settings: { withInternalID: true },
});

export {
  regBtn,
  loginBtn,
  chatTitleBtn,
  formMsgUtilsBtn,
  formMsgSendBtn,
  saveInfoProfileBtn,
  editPasswordProfileBtn,
  exitProfileBtn,
  saveChangePasswordProfileBtn,
};
