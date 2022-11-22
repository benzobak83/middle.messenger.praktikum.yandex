import {
  ProfileAPI,
  TProfileEditData,
  TProfilePasswordData,
} from "../api/ProfileAPI";
import { store } from "../core/store/Store";
import { hiddenChangePassword } from "../pages/profile/utils/chagePassword";
import { toggleReadonly } from "../pages/profile/utils/saveInfoProfile";
import { TResponse } from "../utils/types";

type TObjectOrFormData = TProfileEditData | FormData;

const profileApi = new ProfileAPI();

class ProfileController {
  public async changeProfile(data: TObjectOrFormData) {
    return profileApi
      .changeProfile(data)
      .then((res: TResponse) => {
        return store.set("user", JSON.parse(res.response));
      })
      .then(async () => {
        if ((data as TProfileEditData).avatar) {
          await this.changeAvatar((data as TProfileEditData).avatar);
        }
      })
      .then(toggleReadonly)

      .catch((e) => console.log(e.responseText));
  }
  public async changeAvatar(data: FormData) {
    return profileApi.changeAvatar(data).then((res: TResponse) => {
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

export { ProfileController, TObjectOrFormData };
