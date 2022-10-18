const editProfile = (
  triggerSelector,
  inputSelectors,
  buttonsWrapperSelector
) => {
  const trigger = document.querySelector(triggerSelector);
  const inputs = document.querySelectorAll(inputSelectors);
  const wrapperButtons = document.querySelector(buttonsWrapperSelector);

  function removeReadOnlyAttribute() {
    inputs.forEach((input) => {
      input.removeAttribute("readonly");
    });
  }
  function changeClassForEdit() {
    wrapperButtons.classList.add(
      `${buttonsWrapperSelector.replace(".", "")}_edit`
    );
  }
  const handleClick = () => {
    removeReadOnlyAttribute();
    changeClassForEdit();
  };

  trigger.addEventListener("click", handleClick);
};

export { editProfile };
