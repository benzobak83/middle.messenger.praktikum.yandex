import "../../global-styles/global.scss";
import "./registration.scss";
import "../../components/button/button.scss";
import "../../components/label/label.scss";
import "../../components/loginTitle/logintTitle.scss";

import { labelFocus } from "../../utils/labelFocus";
import { validationForm } from "../../utils/validationForm";

document.addEventListener("DOMContentLoaded", () => {
  labelFocus(".label__input", "label__span_hidden");
  validationForm(".label__input");
});
