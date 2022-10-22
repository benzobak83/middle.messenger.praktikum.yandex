import { Block } from "../../core/block/block";
import { registrationPageTemplate } from "./registration.tmpl";

class RegistrationPage extends Block {
  constructor(props: object) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(registrationPageTemplate, this.props);
  }
}

export { RegistrationPage };
