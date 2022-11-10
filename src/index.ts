import { Router } from "./core/router/Router";
import { Page404 } from "./pages/404/index";
import { Page500 } from "./pages/500/index";
import { ChatPage } from "./pages/chat/index";

import { LoginPage } from "./pages/login/index";
import { ProfilePage } from "./pages/profile/index";
import { RegistrationPage } from "./pages/registration/index";

const router = new Router(".root");

router
  .use("/500", Page500)
  .use("/404", Page404)
  .use("/login", LoginPage)
  .use("/reg", RegistrationPage)
  .use("/chat", ChatPage)
  .use("/profile", ProfilePage)
  .start();

export { router };
