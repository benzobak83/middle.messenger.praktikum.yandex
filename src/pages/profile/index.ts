import "../../global-styles/global.scss";
import "./profile.scss";

import { ProfilePage } from "./profile";
import { render } from "../../utils/render";
import * as inputs from "../../components/input/models/inputs";
import * as buttons from "../../components/button/models/buttons";
import { addEventSubmitForm } from "../../utils/addEventSubmitForm";
import { saveInfoProfile } from "./utils/saveInfoProfile";
import { hiddenChangePassword } from "./utils/chagePassword";
import { Button } from "../../components/button/button";

const profilePage = new ProfilePage({
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
});

render(".root", profilePage);
addEventSubmitForm(".profile__info-form", saveInfoProfile);
addEventSubmitForm(".profile__change-password-form", hiddenChangePassword);
export { profilePage };
