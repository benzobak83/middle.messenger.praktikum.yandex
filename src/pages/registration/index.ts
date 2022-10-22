import "../../global-styles/global.scss";
import "./registration.scss";
import "../../components/button/button.scss";
import "../../components/label/label.scss";

import { RegistrationPage } from "./registration";
import { render } from "../../utils/render";
import { regBtn } from "../../components/button/models/buttons";
import * as labels from "../../components/label/models/labels";

import { labelFocus } from "../../utils/labelFocus";
import { validationForm } from "../../utils/validationForm";

const registrationPage = new RegistrationPage({
  regButton: regBtn,
  labelEmail: labels.labelEmail,
  labelLogin: labels.labelLogin,
  labelFirstName: labels.labelFirstName,
  labelSecondName: labels.labelSecondName,
  labelPhone: labels.labelPhone,
  labelPassword: labels.labelPassword,
  labelPasswordConfirm: labels.labelPasswordConfirm,
  settings: { withInternalID: true },
});

render(".root", registrationPage);

labelFocus(".label__input", "label__span_hidden");
validationForm(".label__input");
