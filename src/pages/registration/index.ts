import "../../global-styles/global.scss";
import "./registration.scss";
import "../../components/button/button.scss";
import "../../components/input/input.scss";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { registrationPageTemplate } from "./registration.tmpl";
import {
  alreadyAccountRegBtn,
  regBtn,
} from "../../components/button/models/buttons";

import { labelFocus } from "../../utils/labelFocus";
import * as inputs from "../../components/input/models/inputs";
import { addEventSubmitForm } from "../../utils/addEventSubmitForm";
import { router } from "../../index";
import { routerPath } from "../../core/router/routerPathVar";

type TRegistrationPageProps = {
  alreadyAccountRegBtn: Button;
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
      alreadyAccountRegBtn: alreadyAccountRegBtn,
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
    console.log("regPage didMount");
    addEventSubmitForm(".reg__form", () => router.go(routerPath.chat));
    labelFocus(".reg", ".label__input", "label__span_hidden");
  }
  render(): DocumentFragment {
    return this.compile(registrationPageTemplate, this.props);
  }
}

export { RegistrationPage, TRegistrationPageProps };
