import { Router } from "./core/router/Router";
import { routerPath } from "./core/router/routerPathVar";
import Page404 from "./pages/404/index";
import { Page500 } from "./pages/500/index";
import ChatPage from "./pages/chat/index";

import LoginPage from "./pages/login/index";
import ProfilePage from "./pages/profile/index";
import { RegistrationPage } from "./pages/registration/index";

const router = new Router(".root");

router
  .use(routerPath.error500, Page500)
  .use(routerPath.error404, Page404)
  .use(routerPath.login, LoginPage)
  .use(routerPath.registration, RegistrationPage)
  .use(routerPath.chat, ChatPage)
  .use(routerPath.profile, ProfilePage)
  .start();

export { router };
