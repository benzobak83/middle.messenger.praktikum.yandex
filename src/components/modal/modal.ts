import { TUsersByChat } from "../../controllers/ChatController";
import { Block } from "../../core/block/block";
import { connect } from "../../utils/connect";
import { Indexed, TPropsSettings } from "../../utils/types";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { modalTemplate } from "./modal.tmpl";

type TModal = {
  inputModal?: Input;
  titleText: string;
  formName: string;
  buttonModal: Button;
  isShowModal: boolean;
  closeCreateChatModalBtn: Button;
  spanName?: string;
  usersList?: TUsersByChat[];
  needUsersList?: boolean;
  settings?: TPropsSettings;
};

function mapModalToProps(state: Indexed) {
  return {
    usersList: state.users_in_chat,
  };
}

class Modal<T extends object = TModal> extends Block<T> {
  constructor(props: TModal) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(modalTemplate, this.props as TModal);
  }
}

export default connect(Modal, { mapStateToProps: mapModalToProps });
export { TModal };
