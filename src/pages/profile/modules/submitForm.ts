import { submitSaveInfoForm } from "../../../components/button/utils/saveInfoProfile";

const submitForm = (formSelector: string) => {
  const form = document.querySelector(formSelector);

  form?.addEventListener("submit", (e) => submitSaveInfoForm(e));
};

export { submitForm };
