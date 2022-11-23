const formInObject = (form: HTMLFormElement) => {
  const result: Record<string, string | number | FormData> = {};

  for (let i = 0; i < form.length; i++) {
    if (form[i].tagName === "INPUT") {
      const input = form[i] as HTMLInputElement;
      const nameInput = input?.getAttribute("name") as string;

      if (nameInput === "avatar") {
        if (!input.files?.length) continue;
        const formData = new FormData();
        formData.append("avatar", (input.files && input.files[0]) as File);
        result[nameInput] = formData;
        continue;
      }

      result[nameInput] = input.value;
    }
  }

  return result;
};

export { formInObject };
