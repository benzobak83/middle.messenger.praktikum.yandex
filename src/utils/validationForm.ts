const validationForm = (inputsSelector) => {
  const inputs = document.querySelectorAll(inputsSelector);

  const filteredNumber = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };
  const createError = (label, msgError) => {
    console.log("createError");
    if (label.querySelector(".validation-error")) return;

    const input = label.querySelector("input");

    const div = document.createElement("div");
    div.textContent = msgError;
    div.classList.add("validation-error");

    label.appendChild(div);
    input.classList.add("input-validation-error");
  };

  const clearError = (label) => {
    console.log("clearError");
    const msgError = label.querySelector(".validation-error");
    const input = label.querySelector("input");

    msgError?.remove();
    input.classList.remove("input-validation-error");
  };

  const validateInput = (e) => {
    console.log("validateInput");
    const attribute = e.target.getAttribute("name");
    const label = e.target.parentNode;
    const value = e.target.value;

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
        const passwordValue: any = document.querySelector(
          'input[name="password"]'
        );

        console.log(passwordValue);
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

  inputs.forEach((input) => {
    input.addEventListener("change", (e) => validateInput(e));
    input.getAttribute("name") === "phone"
      ? input.addEventListener("input", (e) => filteredNumber(e))
      : null;
  });
};

export { validationForm };
