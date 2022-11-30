import { AuthAPI } from "../api/AuthAPI";
import { routerPath } from "../core/router/routerPathVar";
import { store } from "../core/store/Store";
import { router } from "../index";
import { TResponse } from "../utils/types";

type TRegData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  ["password-confirm"]?: string;
};

type TLoginData = {
  login: "string";
  password: "string";
};

const authApi = new AuthAPI();

class AuthController {
  public async registration(data: TRegData) {
    return authApi
      .signUp(data)
      .then(() => {
        router.go(routerPath.chat);
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }

  public async login(data: TLoginData) {
    return authApi
      .signIn(data)
      .then(() => {
        router.go(routerPath.chat);
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }

  public async logout() {
    return authApi
      .logOut()
      .then(() => {
        router.go(routerPath.login);
      })
      .catch((e) => console.log(e));
  }

  public async user() {
    return authApi
      .user()
      .then((res: TResponse) => {
        return store.set("user", JSON.parse(res.response));
      })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
        store.set("user", null);
      });
  }

  public async getUser() {
    const userInfo = store.getState().user;

    if (!userInfo) {
      await this.user();
    }
    return store.getState().user;
  }
}

export { AuthController, TRegData, TLoginData };
