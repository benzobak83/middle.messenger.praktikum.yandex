import "../../global-styles/global.scss";
import "../../components/error/error.scss";

import { Page404 } from "./404";
import { error404 } from "../../components/error/models/errors";
import { render } from "../../utils/render";

const errorPage404 = new Page404({
  error404: error404,
});

render(".root", errorPage404);
