import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { profilePageTemplate } from "./profile.tmpl";

type TProfilePageProps = {
  avatarInputProfile: Input;
  emailInputProfile: Input;
  loginInputProfile: Input;
  nameInputProfile: Input;
  secondNameInputProfile: Input;
  displayNameInputProfile: Input;
  phoneInputProfile: Input;
  oldPasswordInputProfile: Input;
  newPasswordInputProfile: Input;
  repeatPasswordInputProfile: Input;
  editInfoProfileBtn: Input;
  editPasswordProfileBtn: Button;
  exitProfileBtn: Button;
  saveInfoProfileBtn: Button;
  saveChangePasswordProfileBtn: Button;
};

class ProfilePage extends Block<TProfilePageProps> {
  constructor(props: TProfilePageProps) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(profilePageTemplate, this.props);
  }
}

export { ProfilePage, TProfilePageProps };
