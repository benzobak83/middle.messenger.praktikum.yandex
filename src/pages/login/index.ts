import "../../global-styles/global.scss";
import "./login.scss";
import "../../components/input/input.scss";
import "../../components/button/button.scss";

import { LoginPage } from "./login";
import { render } from "../../utils/render";
import { loginBtn } from "../../components/button/models/buttons";
import {
  loginInputAuth,
  passwordInputAuth,
} from "../../components/input/models/inputs";

import { labelFocus } from "../../utils/labelFocus";
import { addEventSubmitForm } from "../../utils/addEventSubmitForm";

const loginPage = new LoginPage({
  loginBtn: loginBtn,
  loginInputAuth: loginInputAuth,
  passwordInputAuth: passwordInputAuth,
  settings: { withInternalID: true },
});

render(".root", loginPage);
addEventSubmitForm(".login__form");

labelFocus(".label__input", "label__span_hidden");
