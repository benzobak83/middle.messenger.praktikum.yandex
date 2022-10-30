const classListAddFunction = (
  triggerSelector: string,
  wrapperSelector: string,
  newClassSelector: string
) => {
  const trigger = document.querySelector(triggerSelector);
  const wrapper = document.querySelector(wrapperSelector);

  const handleClick = () => {
    wrapper?.classList.add(newClassSelector);
  };

  trigger?.addEventListener("click", handleClick);
};

export { classListAddFunction };
