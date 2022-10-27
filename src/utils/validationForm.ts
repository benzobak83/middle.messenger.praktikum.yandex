const filteredNumber = (e: Event) => {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/\D/g, "");
};

const createError = (label: HTMLLabelElement, msgError: string) => {
  if (label.querySelector(".validation-error")) return;
  countErrors++;
  const input = label.querySelector("input");

  const div = document.createElement("div");
  div.textContent = msgError;
  div.classList.add("validation-error");

  input?.classList.add("input-validation-error");
  label.appendChild(div);
};

const clearError = (label: HTMLLabelElement) => {
  const msgError = label.querySelector(".validation-error");
  const input = label.querySelector("input");

  msgError?.remove();
  input?.classList.remove("input-validation-error");
};

let countErrors = 0;

const validateInput = (e: Event) => {
  const target = e.currentTarget as HTMLInputElement;
  const attribute = target.getAttribute("name");
  const label = target.parentNode as HTMLLabelElement;
  const value = target.value;

  const checkingDomElements = attribute;

  if (checkingDomElements)
    switch (attribute) {
      case "email": {
        const checking = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);

        !checking
          ? createError(label, "Некорректный email")
          : clearError(label);
        break;
      }
      case "login": {
        const checking =
          /[a-zA-Z\d\-\_]{3,20}/g.test(value) && /[A-Za-z]/g.test(value);

        !checking
          ? createError(label, "Некорректный логин")
          : clearError(label);
        break;
      }
      case "first_name": {
        const checking = /[A-Z А-Я Ё][a-z а-я -]+$/g.test(value);

        !checking ? createError(label, "Некорректное имя") : clearError(label);
        break;
      }
      case "second_name": {
        const checking = /[A-Z А-Я Ё][a-z а-я -]+$/g.test(value);

        !checking
          ? createError(label, "Недопустимая длина фамилии")
          : clearError(label);
        break;
      }
      case "phone": {
        const checking = value.length > 9;

        !checking
          ? createError(label, "Некорректный номер телефона")
          : clearError(label);
        break;
      }
      case "password": {
        const checking =
          /[A-ZА-Яа-яa-z\d.]{8,40}/g.test(value) &&
          /[A-ZА-Я]/g.test(value) &&
          /\d/g.test(value);

        !checking
          ? createError(label, "Слишком короткий пароль")
          : clearError(label);
        break;
      }
      case "password-confirm": {
        const passwordValue = document.querySelector(
          'input[name="password"]'
        ) as HTMLInputElement;

        const checking = value == passwordValue?.value;

        !checking
          ? createError(label, "Пароли не совпадают")
          : clearError(label);
        break;
      }
      default: {
        console.log("default");
      }
    }
};

const filterSubmitForm = (form: HTMLFormElement) => {
  for (let i = 0; i < form.length; i++) {
    if (form[i].tagName === "INPUT") {
      (form[i] as HTMLElement).focus();
      console.log(form[i]);
    }
  }
  if (countErrors > 0) {
    countErrors = 0;
    return false;
  } else {
    countErrors = 0;
    return true;
  }
};

export { filteredNumber, validateInput, filterSubmitForm };
