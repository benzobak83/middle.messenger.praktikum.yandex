import { formInObject } from "./formInObject";

const submitForm = (event: Event) => {
  event.preventDefault();

  const form = event.currentTarget && (event.currentTarget as HTMLFormElement);

  if (form) {
    const result = formInObject(form);
    console.log(result);
    return result;
  }
};

export { submitForm };
