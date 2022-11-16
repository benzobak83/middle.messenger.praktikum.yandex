import { router } from "../../../index";
import { Input } from "../../../components/input/input";

const saveInfoProfile = () => {
  const CLASS_WRAPPER = "profile__buttons";
  const wrapper = document.querySelector(`.${CLASS_WRAPPER}`);
  console.log(wrapper);
  wrapper?.classList.toggle(`${CLASS_WRAPPER}_edit`);
  toggleReadonly();
};

const toggleReadonly = () => {
  // eslint-disable-next-line
  const buttons: any = router.getComponent("/profile")?.children;

  Object.keys(buttons).forEach((item) => {
    if (
      buttons[item] instanceof Input &&
      typeof buttons[item].props.readonly === "boolean"
    ) {
      console.log(1);
      buttons[item].setProps({ readonly: !buttons[item].props.readonly });
    }
  });
};

export { saveInfoProfile, toggleReadonly };
