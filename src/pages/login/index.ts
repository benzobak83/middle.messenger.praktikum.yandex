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
import { connect } from "../../utils/connect";
import { AuthController, TLoginData } from "../../controllers/AuthController";
import { submitForm } from "../../utils/submitForm";
import { router } from "../../index";
import { routerPath } from "../../core/router/routerPathVar";

type TLoginPageProps = {
  loginBtn: Button;
  loginInputAuth: Input;
  noAccountLoginBtn: Button;
  passwordInputAuth: Input;
  settings?: TPropsSettings;
};
function mapLoginToProps() {
  return {};
}

const authController = new AuthController();

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
          const formData = submitForm(e);
          if (formData) {
            authController.login(formData as TLoginData);
          }
        },
      },
    });
  }

  componentDidMount(): void {
    authController.user().then((res) => {
      if (res !== undefined) {
        router.go(routerPath.chat);
      }
    });

    this.executeOnce(() =>
      labelFocus(".login", ".label__input", "label__span_hidden")
    );
  }

  componentDidUnmount(): void {
    this.isMounted = false;
  }

  render(): DocumentFragment {
    return this.compile(
      loginPageTemplate,
      this.props as Record<string, unknown>
    );
  }
}

export { LoginPage, TLoginPageProps };
export default connect(LoginPage, { mapStateToProps: mapLoginToProps });
