const filteredNumber = (e: Event) => {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/\D/g, "");
};

const createError = (label: HTMLLabelElement, msgError: string) => {
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

const validateInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const attribute = target.getAttribute("name");
  const label = target.parentNode as HTMLLabelElement;
  const value = target.value;

  const checkingDomElements = attribute && label && value;
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
          value.length > 3 &&
          /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(value);

        !checking
          ? createError(label, "Некорректный логин")
          : clearError(label);
        break;
      }
      case "first_name": {
        const checking = value.length > 1;

        !checking
          ? createError(label, "Недопустимая длина имени")
          : clearError(label);
        break;
      }
      case "second_name": {
        const checking = value.length > 2;

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
        const checking = value.length > 6;

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

export { filteredNumber, validateInput };
