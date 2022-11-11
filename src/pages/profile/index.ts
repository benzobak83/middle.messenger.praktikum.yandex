import "../../global-styles/global.scss";
import "./profile.scss";

import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { profilePageTemplate } from "./profile.tmpl";
import * as inputs from "../../components/input/models/inputs";
import * as buttons from "../../components/button/models/buttons";
import { addEventSubmitForm } from "../../utils/addEventSubmitForm";
import { saveInfoProfile } from "./utils/saveInfoProfile";
import { hiddenChangePassword } from "./utils/chagePassword";

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
  editInfoProfileBtn: Button;
  editPasswordProfileBtn: Button;
  exitProfileBtn: Button;
  saveInfoProfileBtn: Button;
  saveChangePasswordProfileBtn: Button;
  styleDisplayCompomemt: string;
};

class ProfilePage extends Block<TProfilePageProps> {
  constructor() {
    super({
      styleDisplayCompomemt: "flex",
      backBtnProfile: buttons.backBtnProfile,
      avatarInputProfile: inputs.avatarInputProfile,
      emailInputProfile: inputs.emailInputProfile,
      loginInputProfile: inputs.loginInputProfile,
      nameInputProfile: inputs.nameInputProfile,
      secondNameInputProfile: inputs.secondNameInputProfile,
      displayNameInputProfile: inputs.displayNameInputProfile,
      phoneInputProfile: inputs.phoneInputProfile,
      oldPasswordInputProfile: inputs.oldPasswordInputProfile,
      newPasswordInputProfile: inputs.newPasswordInputProfile,
      repeatPasswordInputProfile: inputs.repeatPasswordInputProfile,
      editInfoProfileBtn: new Button({
        text: "Изменить данные",
        id: "profile-edit-info",
        type: "button",
        class: "profile__btn",
        settings: { withInternalID: true },
        events: {
          click: () => saveInfoProfile(),
        },
      }),
      editPasswordProfileBtn: buttons.editPasswordProfileBtn,
      exitProfileBtn: buttons.exitProfileBtn,
      saveInfoProfileBtn: buttons.saveInfoProfileBtn,
      saveChangePasswordProfileBtn: buttons.saveChangePasswordProfileBtn,
      settings: { withDefaultClass: "flex" },
    });
  }
  protected componentDidMount(): void {
    addEventSubmitForm(".profile__info-form", saveInfoProfile);
    addEventSubmitForm(".profile__change-password-form", hiddenChangePassword);
  }
  render(): DocumentFragment {
    return this.compile(profilePageTemplate, this.props);
  }
}

export { ProfilePage, TProfilePageProps };
