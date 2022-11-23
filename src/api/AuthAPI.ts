import { TLoginData, TRegData } from "../controllers/authController";
import { HTTPTransport } from "../core/HTTPTransport/HTTPTransport";
import { BaseAPI, BaseURL } from "./BaseAPI";

const authAPIInstance = new HTTPTransport(BaseURL);

class AuthAPI extends BaseAPI {
  public signUp(data: TRegData): Promise<unknown> {
    return authAPIInstance.post("/auth/signup", { data });
  }

  public signIn(data: TLoginData): Promise<unknown> {
    return authAPIInstance.post("/auth/signin", { data });
  }

  public user(): Promise<unknown> {
    return authAPIInstance.get("/auth/user");
  }

  public logOut(): Promise<unknown> {
    return authAPIInstance.post("/auth/logout");
  }
}

export { AuthAPI };
