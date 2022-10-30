import "../../global-styles/global.scss";
import "../../components/error/error.scss";

import { Page404 } from "./500";
import { error500 } from "../../components/error/models/errors";
import { render } from "../../utils/render";

const errorPage404 = new Page404({
  error500: error500,
});

render(".root", errorPage404);
