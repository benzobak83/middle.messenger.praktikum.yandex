import {
  ProfileAPI,
  TProfileEditData,
  TProfilePasswordData,
} from "../api/ProfileAPI";
import { store } from "../core/store/Store";
import { hiddenChangePassword } from "../pages/profile/utils/chagePassword";
import { toggleReadonly } from "../pages/profile/utils/saveInfoProfile";
import { TResponse } from "../utils/types";

const profileApi = new ProfileAPI();

class ProfileController {
  public async changeProfile(data: TProfileEditData) {
    return profileApi
      .changeProfile(data)
      .then((res: TResponse) => {
        console.log(res);
        return store.set("user", JSON.parse(res.response));
      })
      .then(async () => {
        if (data.avatar) {
          console.log(data.avatar);
          await this.changeAvatar(data.avatar);
        }
      })
      .then(toggleReadonly)

      .catch((e) => console.log(e.responseText));
  }
  public async changeAvatar(data: FormData) {
    return profileApi.changeAvatar(data).then((res: TResponse) => {
      console.log(JSON.parse(res.response));
      return store.set("user.avatar", JSON.parse(res.response).avatar);
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
