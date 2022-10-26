const formInObject = (form: HTMLFormElement) => {
  const result: Record<string, string | number> = {};

  for (let i = 0; i < form.length; i++) {
    if (form[i].tagName === "INPUT") {
      const input = form[i] as HTMLInputElement;
      const nameInput = input?.getAttribute("name") as string;
      result[nameInput] = input.value;
    }
  }

  return result;
};

export { formInObject };
