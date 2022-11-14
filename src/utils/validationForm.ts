import {
  regAllWithoutNumAndPlus,
  regEmail,
  regLogin,
  regOnlyLettersCirAndLat,
  regOnlyLettersLat,
  regOnlyNum,
  regOnlyUpperCirAndLat,
  regPassword,
  regPhone,
} from "./regVariables";

const filteredNumber = (e: Event) => {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(regAllWithoutNumAndPlus, "");
};

const createError = (label: HTMLLabelElement, msgError: string) => {
  countErrors++;
  if (label.querySelector(".validation-error")) return;
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
        const checking = regEmail.test(value);

        !checking
          ? createError(label, "Некорректный email")
          : clearError(label);
        break;
      }
      case "login": {
        const checking = regLogin.test(value) && regOnlyLettersLat.test(value);

        !checking
          ? createError(label, "от 3 до 20 символов, латиница, без пробелов")
          : clearError(label);
        break;
      }
      case "first_name": {
        const checking = regOnlyLettersCirAndLat.test(value);
        !checking
          ? createError(label, "Первая буква заглавная, без пробелов и цифр")
          : clearError(label);
        break;
      }
      case "second_name": {
        const checking = regOnlyLettersCirAndLat.test(value);
        !checking
          ? createError(label, "Первая буква заглавная, без пробелов и цифр")
          : clearError(label);
        break;
      }
      case "phone": {
        const checking = regPhone.test(value);

        !checking
          ? createError(label, "Некорректный номер телефона")
          : clearError(label);
        break;
      }
      case "password":
      case "oldPassword":
      case "newPassword": {
        const checking =
          regPassword.test(value) &&
          regOnlyUpperCirAndLat.test(value) &&
          regOnlyNum.test(value);
        !checking
          ? createError(
              label,
              "8-40 символов, обязательно заглавная буква и цифра"
            )
          : clearError(label);
        break;
      }

      case "password-confirm":
      case "repeat_password": {
        const passwordValue = (document.querySelector(
          'input[name="password"]'
        ) ||
          document.querySelector(
            'input[name="password-confirm"]'
          )) as HTMLInputElement;

        const checking = value == passwordValue?.value;

        !checking
          ? createError(label, "Пароли не совпадают")
          : clearError(label);
        break;
      }

      case "display_name": {
        const checking = regLogin.test(value) && regOnlyLettersLat.test(value);

        !checking
          ? createError(label, "от 3 до 20 символов, латиница, без пробелов")
          : clearError(label);
        break;
      }

      case "message": {
        const checking = value.length > 0;

        !checking ? createError(label, "") : clearError(label);
        break;
      }

      default: {
        console.log("default");
        console.log(attribute);
      }
    }
};

const filterSubmitForm = (form: HTMLFormElement) => {
  countErrors = 0;
  for (let i = 0; i < form.length; i++) {
    if (form[i].tagName === "INPUT") {
      (form[i] as HTMLElement).focus();
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
