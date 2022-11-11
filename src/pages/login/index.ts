import "../../global-styles/global.scss";
import "./login.scss";
import "../../components/input/input.scss";
import "../../components/button/button.scss";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { loginPageTemplate } from "./login.tmpl";
import {
  loginBtn,
  noAccountLoginBtn,
} from "../../components/button/models/buttons";
import {
  loginInputLogin,
  passwordInputLogin,
} from "../../components/input/models/inputs";
import { labelFocus } from "../../utils/labelFocus";
import { addEventSubmitForm } from "../../utils/addEventSubmitForm";
import { router } from "../../index";
import { routerPath } from "../../core/router/routerPathVar";

type TLoginPageProps = {
  loginBtn: Button;
  loginInputAuth: Input;
  noAccountLoginBtn: Button;
  passwordInputAuth: Input;
  settings?: TPropsSettings;
};

class LoginPage extends Block<TLoginPageProps> {
  constructor() {
    super({
      loginBtn: loginBtn,
      noAccountLoginBtn: noAccountLoginBtn,
      loginInputAuth: loginInputLogin,
      passwordInputAuth: passwordInputLogin,
      settings: { withInternalID: true },
    });
  }

  componentDidMount(): void {
    console.log("logPage didMount");
    addEventSubmitForm(".login__form", () => router.go(routerPath.chat));
    labelFocus(".login", ".label__input", "label__span_hidden");
  }

  render(): DocumentFragment {
    return this.compile(loginPageTemplate, this.props);
  }
}

export { LoginPage, TLoginPageProps };
