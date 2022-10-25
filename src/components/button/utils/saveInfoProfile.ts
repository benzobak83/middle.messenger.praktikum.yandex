import { profilePage } from "../../../pages/profile/index";
import { Input } from "../../input/input";

const saveInfoProfile = () => {
  const CLASS_WRAPPER = "profile__buttons";
  const wrapper = document.querySelector(`.${CLASS_WRAPPER}`);
  wrapper?.classList.toggle(`${CLASS_WRAPPER}_edit`);
  toggleReadonly();
};

const submitSaveInfoForm = (event: Event) => {
  event.preventDefault();

  const form = event.currentTarget && (event.currentTarget as HTMLFormElement);

  if (form) {
    const result: Record<string, string | number> = {};
    for (let i = 0; i < form.length; i++) {
      const input = form[i] as HTMLInputElement;
      const nameInput = input?.getAttribute("name") as string;

      result[nameInput] = input.value;
    }
    console.log(result);
    saveInfoProfile();
  }
};

const toggleReadonly = () => {
  const buttons: Record<string, Input> = profilePage.children;

  Object.keys(buttons).forEach((item) => {
    if (
      buttons[item] instanceof Input &&
      typeof buttons[item].props.readonly === "boolean"
    ) {
      buttons[item].setProps({ readonly: !buttons[item].props.readonly });
    }
  });
};

export { saveInfoProfile, submitSaveInfoForm };
