import { Block } from "../../core/block/block";
import { profilePageTemplate } from "./profile.tmpl";

class ProfilePage extends Block {
  constructor(props: object) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(profilePageTemplate, this.props);
  }
}

export { ProfilePage };
