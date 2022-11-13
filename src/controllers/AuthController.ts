import { AuthAPI } from "../api/AuthAPI";
import { store } from "../core/store/Store";

type TRegData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  ["password-confirm"]: string;
};

const authApi = new AuthAPI();

class AuthController {
  public getCheck() {
    setTimeout(() => store.set("check", "check completed"), 100);
  }

  public async registration(data: TRegData) {
    console.log(data);
    authApi
      .signUp(data)
      .then((res: Response) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }
}

export { AuthController, TRegData };
