const CHANGE_PASSWORD_CLASS = "change-password";

const activeChangePassword = (): void => {
  const wrapper = document.querySelector(".profile");
  wrapper?.classList.add(CHANGE_PASSWORD_CLASS);
};

const hiddenChangePassword = (): void => {
  const wrapper = document.querySelector(".profile");
  wrapper?.classList.remove(CHANGE_PASSWORD_CLASS);
};

export { activeChangePassword, hiddenChangePassword };
