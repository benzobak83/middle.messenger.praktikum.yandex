import "../../global-styles/global.scss";
import "./registration.scss";
import "../../components/button/button.scss";
import "../../components/input/input.scss";

import { RegistrationPage } from "./registration";
import { render } from "../../utils/render";
import { regBtn } from "../../components/button/models/buttons";

import { labelFocus } from "../../utils/labelFocus";
import * as inputs from "../../components/input/models/inputs";
import { addEventSubmitForm } from "../../utils/addEventSubmitForm";

const registrationPage = new RegistrationPage({
  emailInputAuth: inputs.emailInputAuth,
  loginInputAuth: inputs.loginInputAuth,
  firstNameInputAuth: inputs.firstNameInputAuth,
  secondNameInputAuth: inputs.secondNameInputAuth,
  phoneInputAuth: inputs.phoneInputAuth,
  passwordInputAuth: inputs.passwordInputAuth,
  passwordConfirmInputAuth: inputs.passwordConfirmInputAuth,
  regButton: regBtn,

  settings: { withInternalID: true },
});

render(".root", registrationPage);
addEventSubmitForm(".reg__form");
labelFocus(".label__input", "label__span_hidden");
