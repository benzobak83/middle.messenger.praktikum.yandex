import { Block } from "../../core/block/block";
import { loginPageTemplate } from "./login.tmpl";

class LoginPage extends Block {
  constructor(props: object) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(loginPageTemplate, this.props);
  }
}

export { LoginPage };
