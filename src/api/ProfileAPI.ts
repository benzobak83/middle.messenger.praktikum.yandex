import { HTTPTransport } from "../core/HTTPTransport/HTTPTransport";
import { BaseAPI, BaseURL } from "./BaseAPI";

type TProfileEditData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: FormData;
};

type TProfilePasswordData = {
  oldPassword: string;
  newPassword: string;
};

const profileAPIInstance = new HTTPTransport(BaseURL);

class ProfileAPI extends BaseAPI {
  public changeProfile(data: TProfileEditData): Promise<unknown> {
    return profileAPIInstance.put("/user/profile", { data } as Record<
      string,
      unknown
    >);
  }

  public changeAvatar(data: FormData): Promise<unknown> {
    return profileAPIInstance.put("/user/profile/avatar", { data });
  }

  public changePassword(data: TProfilePasswordData): Promise<unknown> {
    return profileAPIInstance.put("/user/password", { data });
  }
}

export { ProfileAPI, TProfileEditData, TProfilePasswordData };
