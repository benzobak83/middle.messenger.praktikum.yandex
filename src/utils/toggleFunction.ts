const toggleFunction = (triggerSelector, wrapperSelector, toggleClass) => {
  const trigger = document.querySelector(triggerSelector);
  const wrapper = document.querySelector(wrapperSelector);

  const handleClick = () => {
    wrapper.classList.toggle(toggleClass);
  };

  trigger.addEventListener("click", handleClick);
};

export { toggleFunction };
