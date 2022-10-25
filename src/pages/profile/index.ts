import "../../global-styles/global.scss";
import "./profile.scss";
import "../../components/inputProfile/inputProfile.scss";

import { ProfilePage } from "./profile";
import { render } from "../../utils/render";
import * as inputs from "../../components/input/models/inputs";
import * as buttons from "../../components/button/models/buttons";

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

  editInfoProfileBtn: buttons.editInfoProfileBtn,
  editPasswordProfileBtn: buttons.editPasswordProfileBtn,
  exitProfileBtn: buttons.exitProfileBtn,
  saveInfoProfileBtn: buttons.saveInfoProfileBtn,
  saveChangePasswordProfileBtn: buttons.saveChangePasswordProfileBtn,
});

render(".root", profilePage);
// import { editProfile } from "./modules/editProfile";
// import { classListAddFunction } from "../../utils/classListAddFunction";

// document.addEventListener("DOMContentLoaded", () => {
//   editProfile(
//     "#profile-edit-info",
//     ".profile__info-value",
//     ".profile__buttons"
//   );
//   classListAddFunction("#profile-edit-password", ".profile", "change-password");
// });
