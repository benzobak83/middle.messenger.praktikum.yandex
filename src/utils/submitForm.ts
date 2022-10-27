import { formInObject } from "./formInObject";

const submitForm = (event: Event) => {
  event.preventDefault();

  const form = event.currentTarget && (event.currentTarget as HTMLFormElement);
  const inputs = form?.elements;

  for (let i = 0; i < form.length; i++) {
    if (form[i].tagName === "INPUT") {
      form[i].focus();
    }
  }

  if (form) {
    const result = formInObject(form);
    console.log(result);
    return result;
  }
};

export { submitForm };
