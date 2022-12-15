import "../../global-styles/global.scss";
import "./profile.scss";

import { Button } from "../../components/button/button";
import { Input, TInput } from "../../components/input/input";
import { Block } from "../../core/block/block";
import { profilePageTemplate } from "./profile.tmpl";
import * as inputs from "../../components/input/models/inputs";
import * as buttons from "../../components/button/models/buttons";

import { saveInfoProfile } from "./utils/saveInfoProfile";
import { connect } from "../../utils/connect";
import { submitForm } from "../../utils/submitForm";
import { AuthController } from "../../controllers/AuthController";
import { store } from "../../core/store/Store";
import { ProfileController } from "../../controllers/ProfileController";
import { TProfilePasswordData } from "../../api/ProfileAPI";
import { Indexed } from "../../utils/types";
import NotificationAlert from "../../components/notificationAlert/notificationAlert";

type TProfilePageProps = {
  notificationProfile: typeof NotificationAlert;
  avatarInputProfile: Input;
  emailInputProfile: Input;
  loginInputProfile: Input;
  nameInputProfile: Input;
  secondNameInputProfile: Input;
  displayNameInputProfile: Input;
  phoneInputProfile: Input;
  oldPasswordInputProfile: Input;
  newPasswordInputProfile: Input;
  repeatPasswordInputProfile: Input;
  editInfoProfileBtn: Button;
  editPasswordProfileBtn: Button;
  exitProfileBtn: Button;
  saveInfoProfileBtn: Button;
  saveChangePasswordProfileBtn: Button;
  styleDisplayCompomemt: string;
};

function mapChatToProps(state: Indexed) {
  return {
    user: state.user,
    avatar: state.avatar,
  };
}

const authController = new AuthController();
const profileController = new ProfileController();

class ProfilePage<T extends object = TProfilePageProps> extends Block<T> {
  constructor() {
    super({
      styleDisplayCompomemt: "flex",

      backBtnProfile: buttons.backBtnProfile,
      avatarInputProfile: inputs.avatarInputProfile,
      emailInputProfile: inputs.emailInputProfile,
      loginInputProfile: inputs.loginInputProfile,
      nameInputProfile: inputs.nameInputProfile,
      secondNameInputProfile: inputs.secondNameInputProfile,
      displayNameInputProfile: inputs.displayNameInputProfile,
      phoneInputProfile: inputs.phoneInputProfile,
      oldPasswordInputProfile: inputs.oldPasswordInputProfile,
      newPasswordInputProfile: inputs.newPasswordInputProfile,
      repeatPasswordInputProfile: inputs.repeatPasswordInputProfile,
      editInfoProfileBtn: new Button({
        text: "Изменить данные",
        id: "profile-edit-info",
        type: "button",
        class: "profile__btn",
        settings: { withInternalID: true },
        events: {
          click: () => saveInfoProfile(),
        },
      }),
      editPasswordProfileBtn: buttons.editPasswordProfileBtn,
      exitProfileBtn: buttons.exitProfileBtn,
      saveInfoProfileBtn: buttons.saveInfoProfileBtn,
      saveChangePasswordProfileBtn: buttons.saveChangePasswordProfileBtn,
      notificationProfile: new NotificationAlert({}),
      settings: { withDefaultClass: "flex" },

      events: {
        submit: async (e: Event) => {
          const formData = submitForm(e);
          if (formData) {
            const nameFormData = (e.target as HTMLFormElement).getAttribute(
              "name"
            );

            switch (nameFormData) {
              case "form-edit-profile": {
                // eslint-disable-next-line
                await profileController.changeProfile(formData as any);
                const user = store.getState().user;
                this.refreshChildrens(user);
                break;
              }
              case "form-edit-password": {
                await profileController.changePassword(
                  formData as TProfilePasswordData
                );
                break;
              }
              default:
                break;
            }
          }
        },
      },
    });
  }
  public refreshChildrens(user: Record<string, unknown>): void {
    const childrens = this.getChildren();

    Object.keys(childrens).forEach((key) => {
      const nameInput = (childrens[key] as Input).props.nameInput;
      if (nameInput) {
        (childrens[key] as Input).setProps({
          valueInput: user[nameInput],
        } as TInput);
      }
    });
  }
  protected async componentDidMount(): Promise<void> {
    await authController.getUser();
    const user = store.getState().user;
    this.refreshChildrens(user);
    store.set("user", user);
  }
  render(): DocumentFragment {
    return this.compile(
      profilePageTemplate,
      this.props as Record<string, unknown>
    );
  }
}

export { TProfilePageProps };
export default connect(ProfilePage, { mapStateToProps: mapChatToProps });
