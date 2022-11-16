import { Button } from "../button";
import { toggleHoverMenu } from "../../../pages/chat/utils/toggleHoverMenu";
import { activeChangePassword } from "../../../pages/profile/utils/chagePassword";
import { router } from "../../../index";
import { routerPath } from "../../../core/router/routerPathVar";
import { AuthController } from "../../../controllers/authController";
import { toggleModal } from "../../../utils/toggleModal";

const authController = new AuthController();

const EVENTS = {
  routerGoChat: {
    click: (e: Event) => {
      e.preventDefault();
      router.go(routerPath.chat);
    },
  },
  routerGoProfile: {
    click: (e: Event) => {
      e.preventDefault();
      router.go(routerPath.profile);
    },
  },
  routerGoLogin: {
    click: (e: Event) => {
      e.preventDefault();
      router.go(routerPath.login);
    },
  },
  routerGoRegistration: {
    click: (e: Event) => {
      e.preventDefault();
      router.go(routerPath.registration);
    },
  },
  logout: {
    click: (e: Event) => {
      e.preventDefault();
      console.log("cok");
      authController.logout();
    },
  },
  toggleModalEvent: {
    click: toggleModal,
  },
};

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

const backBtnProfile = new Button({
  text: '<img src="../../../static/img/back.svg" alt="Back" class="back__img">',
  href: "#",
  settings: { withInternalID: true },
  events: EVENTS.routerGoChat,
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
  events: EVENTS.logout,
});

const goToProfileBtn = new Button({
  text: "Профиль >",
  href: "#",
  class: "side-bar__btn-link",
  settings: { withInternalID: true },
  events: EVENTS.routerGoProfile,
});

const createNewChatBtn = new Button({
  text: "Создать чат",
  href: "#",
  id: "create-new-chat-btn",
  class: "side-bar__btn-link btn-create-chat",
  settings: { withInternalID: true },
  events: EVENTS.toggleModalEvent,
});

const noAccountLoginBtn = new Button({
  text: "Нет аккаунта?",
  href: "#",
  class: "login__buttons-link",
  settings: { withInternalID: true },
  events: EVENTS.routerGoRegistration,
});

const alreadyAccountRegBtn = new Button({
  text: "Войти",
  href: "#",
  class: "reg__buttons-link",
  settings: { withInternalID: true },
  events: EVENTS.routerGoLogin,
});

const btnError404 = new Button({
  text: "Назад к чатам",
  href: "#",
  class: "error__btn error__btn_back",
  settings: { withInternalID: true },
  events: EVENTS.routerGoChat,
});
const btnError500 = new Button({
  text: "Назад к чатам",
  href: "#",
  class: "error__btn error__btn_back",
  settings: { withInternalID: true },
  events: EVENTS.routerGoChat,
});

const saveChangePasswordProfileBtn = new Button({
  text: "Сохранить",
  id: "profile-change-password-save",
  type: "submit",
  class: "profile__btn profile__btn_save",
  settings: { withInternalID: true },
});

const sendFormCreateNameChatButton = new Button({
  text: "Создать",
  id: "send-name-chat",
  type: "submit",
  class: "big-button",
  settings: { withInternalID: true },
});

const closeCreateChatModalBtn = new Button({
  text: "Х",
  type: "button",
  id: "close-modal-create-chate",
  class: "close-modal-btn",
  settings: { withInternalID: true },
  events: EVENTS.toggleModalEvent,
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
  btnError404,
  btnError500,
  goToProfileBtn,
  backBtnProfile,
  noAccountLoginBtn,
  alreadyAccountRegBtn,
  createNewChatBtn,
  sendFormCreateNameChatButton,
  closeCreateChatModalBtn,
};
