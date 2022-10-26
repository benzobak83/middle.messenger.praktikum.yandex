import { submitForm } from "./submitForm";

const addEventSubmitForm = (
  formSelector: string,
  cb: null | (() => void) = null
): void => {
  const form = document.querySelector(formSelector);
  form?.addEventListener("submit", (e) => {
    submitForm(e);
    cb ? cb() : null;
  });
};

export { addEventSubmitForm };
