import { formInObject } from "./formInObject";
import { filterSubmitForm } from "./validationForm";

const submitForm = (event: Event) => {
  event.preventDefault();

  const form = event.target && (event.target as HTMLFormElement);

  if (form && filterSubmitForm(form)) {
    const result = formInObject(form);
    console.log(result);
    return result;
  } else {
    return false;
  }
};

export { submitForm };
