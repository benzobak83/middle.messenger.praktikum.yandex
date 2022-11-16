import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { modalTemplate } from "./modal.tmpl";

type TModal = {
  inputModal: Input;
  formName: string;
  buttonModal: Button;
  isShowModal: boolean;
  closeCreateChatModalBtn: Button;
  settings?: TPropsSettings;
};

class Modal extends Block<TModal> {
  constructor(props: TModal) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(modalTemplate, this.props);
  }
}

export { Modal, TModal };
