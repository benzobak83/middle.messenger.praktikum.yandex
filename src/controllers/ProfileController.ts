import {
  ProfileAPI,
  TProfileEditData,
  TProfilePasswordData,
} from "../api/ProfileAPI";
import { store } from "../core/store/Store";
import { hiddenChangePassword } from "../pages/profile/utils/chagePassword";
import { saveInfoProfile } from "../pages/profile/utils/saveInfoProfile";
import { TResponse } from "../utils/types";

const profileApi = new ProfileAPI();

class ProfileController {
  public async changeProfile(data: TProfileEditData) {
    console.log(data);
    return profileApi
      .changeProfile(data)
      .then((res: TResponse) => {
        console.log(res);
        return store.set("user", JSON.parse(res.response));
      })
      .then(() => {
        if (data.avatar) {
          console.log(data.avatar);
          this.changeAvatar(data.avatar);
        }
      })
      .then(saveInfoProfile)

      .catch((e) => console.log(JSON.parse(e.responseText)));
  }
  public async changeAvatar(data: FormData) {
    console.log(data);
    return profileApi.changeAvatar(data).then((res: TResponse) => {
      console.log(JSON.parse(res.response));
      return store.forceSet("user.avatar", JSON.parse(res.response).avatar);
    });
  }

  public async changePassword(data: TProfilePasswordData) {
    return profileApi.changePassword(data).then(() => {
      console.log("password change");
      hiddenChangePassword();
    });
  }
}

export { ProfileController };
