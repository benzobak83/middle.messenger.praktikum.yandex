import { Block } from "../../core/block/block";
import { Indexed } from "../../utils/types";
import { connect } from "../../utils/connect";
import ChatList from "../chatList/chatList";
import { FormSendMsg } from "../formSendMessage/formSendMsg";
import { chatSectionTemplate } from "./chatSection.tmpl";
import ChatTitle from "../chatTitle/chatTitle";
import defaultAvatar from "../../../static/img/default_avatar.png";
import {
  addUserInChatBtn,
  chatTitleBtn,
  deleteChatBtn,
  deleteUserInChatBtn,
  editPhotoInChatBtn,
} from "../button/models/buttons";
import { formSendMessage } from "../formSendMessage/models/formSendMessage";

type TChatSection = {
  chatTitle: typeof ChatTitle;
  chatList: typeof ChatList;
  formSendMessage: FormSendMsg;
};

function mapChatSectiontoProps(state: Indexed) {
  return {
    active_chat_id: state.active_chat_id,
  };
}

class ChatSection<T extends object = TChatSection> extends Block<T> {
  constructor() {
    super({
      chatTitle: new ChatTitle({
        srcAvatar: defaultAvatar,
        chatName: "",
        deleteChatBtn: deleteChatBtn,
        chatTitleBtn: chatTitleBtn,
        addUserInChatBtn: addUserInChatBtn,
        deleteUserInChatBtn: deleteUserInChatBtn,
        editPhotoInChatBtn: editPhotoInChatBtn,
        settings: { withInternalID: true },
      }),
      chatList: new ChatList({ messages: [] }),
      formSendMessage: formSendMessage,
    });
  }

  render(): DocumentFragment {
    return this.compile(chatSectionTemplate, this.props as TChatSection);
  }
}

export { TChatSection };
export default connect(ChatSection, { mapStateToProps: mapChatSectiontoProps });
