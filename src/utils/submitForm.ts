import { TData } from "../core/HTTPTransport/HTTPTransport";
import { formInObject } from "./formInObject";
import { filterSubmitForm } from "./validationForm";

const submitForm = (event: Event): TData | boolean => {
  event.preventDefault();

  const form = event.target && (event.target as HTMLFormElement);

  if (form && filterSubmitForm(form)) {
    const result = formInObject(form);
    console.log(result);
    return result as TData;
  } else {
    return false;
  }
};

export { submitForm };
