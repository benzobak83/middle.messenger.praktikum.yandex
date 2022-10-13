import "../../global-styles/global.scss";
import "./profile.scss";
import "../../components/inputProfile/inputProfile.scss";

import { editProfile } from "./modules/editProfile";
import { classListAddFunction } from "../../utils/classListAddFunction";

document.addEventListener("DOMContentLoaded", (e) => {
  editProfile(
    "#profile-edit-info",
    ".profile__info-value",
    ".profile__buttons"
  );
  classListAddFunction("#profile-edit-password", ".profile", "change-password");
});
