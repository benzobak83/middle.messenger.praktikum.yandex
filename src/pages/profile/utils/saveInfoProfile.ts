import { profilePage } from "../index";
import { Input } from "../../../components/input/input";

const saveInfoProfile = () => {
  const CLASS_WRAPPER = "profile__buttons";
  const wrapper = document.querySelector(`.${CLASS_WRAPPER}`);
  wrapper?.classList.toggle(`${CLASS_WRAPPER}_edit`);
  toggleReadonly();
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

export { saveInfoProfile };
