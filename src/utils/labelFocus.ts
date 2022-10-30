const labelFocus = (inputsSelector: string, hiddenClass: string) => {
  const inputs = document.querySelectorAll(inputsSelector);
  const handleChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const span = input.parentNode?.querySelector("span");

    if (!span) return;

    if (e.type === "change") {
      input.value.length > 0
        ? span.classList.remove(hiddenClass)
        : span.classList.add(hiddenClass);
    }
    if (e.type === "focus") {
      span.classList.remove(hiddenClass);
      input.placeholder = "";
    }
    if (e.type === "blur") {
      input.value.length == 0 ? span.classList.add(hiddenClass) : null;
      input.placeholder = span.textContent as string;
    }
  };

  inputs?.forEach((input) => {
    input.addEventListener("change", (e) => handleChange(e));
    input.addEventListener("focus", (e) => handleChange(e));
    input.addEventListener("blur", (e) => handleChange(e));
  });
};

export { labelFocus };
