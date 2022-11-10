import "../../global-styles/global.scss";
import "./registration.scss";
import "../../components/button/button.scss";
import "../../components/input/input.scss";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { registrationPageTemplate } from "./registration.tmpl";
import { regBtn } from "../../components/button/models/buttons";

import { labelFocus } from "../../utils/labelFocus";
import * as inputs from "../../components/input/models/inputs";
import { addEventSubmitForm } from "../../utils/addEventSubmitForm";

type TRegistrationPageProps = {
  emailInputAuth: Input;
  loginInputAuth: Input;
  firstNameInputAuth: Input;
  secondNameInputAuth: Input;
  phoneInputAuth: Input;
  passwordInputAuth: Input;
  passwordConfirmInputAuth: Input;
  regButton: Button;
  settings: TPropsSettings;
};
class RegistrationPage extends Block<TRegistrationPageProps> {
  constructor() {
    super({
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
  }
  componentDidMount(): void {
    document.addEventListener("DOMContentLoaded", () => {
      addEventSubmitForm(".reg__form");
      labelFocus(".label__input", "label__span_hidden");
    });
  }
  render(): DocumentFragment {
    return this.compile(registrationPageTemplate, this.props);
  }
}

export { RegistrationPage, TRegistrationPageProps };
