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
import { router } from "../../index";
import { routerPath } from "../../core/router/routerPathVar";
import { connect } from "../../utils/connect";
import { AuthController } from "../../controllers/authController";
import { submitForm } from "../../utils/submitForm";

type TLoginPageProps = {
  loginBtn: Button;
  loginInputAuth: Input;
  noAccountLoginBtn: Button;
  passwordInputAuth: Input;
  settings?: TPropsSettings;
};
function mapNothingToProps(state: any) {
  return {
    check: state.check,
  };
}

class LoginPage<T extends object = TLoginPageProps> extends Block<T> {
  constructor() {
    super({
      loginBtn: loginBtn,
      noAccountLoginBtn: noAccountLoginBtn,
      loginInputAuth: loginInputLogin,
      passwordInputAuth: passwordInputLogin,
      settings: { withInternalID: true },
      events: {
        submit: (e: Event) => {
          if (submitForm(e)) {
            router.go(routerPath.chat);
          }
        },
      },
    });

    const checkController = new AuthController();
    console.log(AuthController);
    checkController.getCheck();
  }

  componentDidMount(): void {
    console.log("logPage didMount");
    labelFocus(".login", ".label__input", "label__span_hidden");
  }

  render(): DocumentFragment {
    return this.compile(
      loginPageTemplate,
      this.props as Record<string, unknown>
    );
  }
}

export { LoginPage, TLoginPageProps };
export default connect(LoginPage, mapNothingToProps);
