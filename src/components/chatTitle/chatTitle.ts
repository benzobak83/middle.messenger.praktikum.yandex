import { Block } from "../../core/block/block";
import { chatTitleTemplate } from "./chatTitle.tmpl";
import { Button } from "../button/button";
import { Indexed, TPropsSettings } from "../../utils/types";
import { connect } from "../../utils/connect";

type TChatTitle = {
  srcAvatar: string;
  chatName: string;
  events?: Record<string, (e: Event) => void>;
  settings?: TPropsSettings;
  chatTitleBtn: Button;
  deleteChatBtn: Button;
  deleteUserInChatBtn: Button;
  addUserInChatBtn: Button;
  editPhotoInChatBtn: Button;
};

function mapChatTitletoProps(state: Indexed) {
  return {
    chatName: state["active_chat"]?.chatName,
    srcAvatar: state["active_chat"]?.src_avatar
      ? state["active_chat"]?.src_avatar
      : "../../../static/img/default_avatar.png",
  };
}

class ChatTitle<T extends object = TChatTitle> extends Block<T> {
  constructor(props: TChatTitle) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatTitleTemplate, this.props as TChatTitle);
  }
}

export { TChatTitle };
export default connect(ChatTitle, { mapStateToProps: mapChatTitletoProps });
