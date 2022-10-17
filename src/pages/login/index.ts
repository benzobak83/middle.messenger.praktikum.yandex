import "../../global-styles/global.scss";
import "./login.scss";
import "../../components/label/label.scss";
import "../../components/loginTitle/logintTitle.scss";

import { labelFocus } from "../../utils/labelFocus";

document.addEventListener("DOMContentLoaded", () => {
  labelFocus(".label__input", "label__span_hidden");
});
