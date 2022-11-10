import "../../global-styles/global.scss";
import "./login.scss";
import "../../components/input/input.scss";
import "../../components/button/button.scss";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { loginPageTemplate } from "./login.tmpl";
import { loginBtn } from "../../components/button/models/buttons";
import {
  loginInputAuth,
  passwordInputAuth,
} from "../../components/input/models/inputs";
import { labelFocus } from "../../utils/labelFocus";
import { addEventSubmitForm } from "../../utils/addEventSubmitForm";

type TLoginPageProps = {
  loginBtn: Button;
  loginInputAuth: Input;
  passwordInputAuth: Input;
  settings?: TPropsSettings;
};

class LoginPage extends Block<TLoginPageProps> {
  constructor() {
    super({
      loginBtn: loginBtn,
      loginInputAuth: loginInputAuth,
      passwordInputAuth: passwordInputAuth,
      settings: { withInternalID: true },
    });
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", () => {
      addEventSubmitForm(".login__form");
      labelFocus(".label__input", "label__span_hidden");
    });
  }

  render(): DocumentFragment {
    return this.compile(loginPageTemplate, this.props);
  }
}

export { LoginPage, TLoginPageProps };
