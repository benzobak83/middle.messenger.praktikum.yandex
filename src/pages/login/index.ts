import "../../global-styles/global.scss";
import "./login.scss";
import "../../components/label/label.scss";
import "../../components/button/button.scss";

import { LoginPage } from "./login";
import { render } from "../../utils/render";
import { loginBtn } from "../../components/button/models/buttons";
import {
  labelLogin,
  labelPassword,
} from "../../components/label/models/labels";

import { labelFocus } from "../../utils/labelFocus";

const loginPage = new LoginPage({
  loginBtn: loginBtn,
  labelLogin: labelLogin,
  labelPassword: labelPassword,
  settings: { withInternalID: true },
});

render(".root", loginPage);

labelFocus(".label__input", "label__span_hidden");
