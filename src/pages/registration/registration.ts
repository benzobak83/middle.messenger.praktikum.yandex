import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { registrationPageTemplate } from "./registration.tmpl";

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
  constructor(props: TRegistrationPageProps) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(registrationPageTemplate, this.props);
  }
}

export { RegistrationPage, TRegistrationPageProps };
