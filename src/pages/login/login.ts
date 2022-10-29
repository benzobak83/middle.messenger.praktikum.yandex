import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { loginPageTemplate } from "./login.tmpl";

type TLoginPageProps = {
  loginBtn: Button;
  loginInputAuth: Input;
  passwordInputAuth: Input;
  settings?: TPropsSettings;
};

class LoginPage extends Block<TLoginPageProps> {
  constructor(props: TLoginPageProps) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(loginPageTemplate, this.props);
  }
}

export { LoginPage, TLoginPageProps };
