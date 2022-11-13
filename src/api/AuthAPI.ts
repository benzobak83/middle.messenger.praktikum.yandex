import { HTTPTransport } from "../core/HTTPTransport/HTTPTransport";
import { BaseAPI, BaseURL } from "./BaseAPI";

type TAuthRequest = {
  login: string;
  phone: string;
  first_name: string;
  email: string;
  password: string;
  second_name: string;
};

type TLoginRequest = {
  login: "string";
  password: "string";
};

const authAPIInstance = new HTTPTransport(BaseURL);

class AuthAPI extends BaseAPI {
  public signUp(data: TAuthRequest): Promise<unknown> {
    return authAPIInstance.post("/auth/signup", { data });
  }

  public signIn(data: TLoginRequest): Promise<unknown> {
    return authAPIInstance.post("/auth/signin", { data });
  }

  public user(): Promise<unknown> {
    return authAPIInstance.post("/auth/user");
  }

  public logOut(): Promise<unknown> {
    return authAPIInstance.post("/auth/logout");
  }
}

export { AuthAPI };
