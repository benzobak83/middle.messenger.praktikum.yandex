import { Block } from "../core/block/block";
import { routerPath } from "../core/router/routerPathVar";
import { router } from "../index";
import { TChatPageProps } from "../pages/chat/index";

function getModal(path: string, modalName: string) {
  const childrens = (
    router.getRoute(path).getBlock() as Block<TChatPageProps>
  ).getChildren();
  // eslint-disable-next-line
  const modal = childrens[modalName] as any;
  return modal;
}

const toggleModal = (e: Event) => {
  e.preventDefault();

  const idBtn = (e.currentTarget as HTMLElement).getAttribute("id");

  switch (idBtn) {
    case "create-new-chat-btn":
    case "close-modal-create-chat": {
      const modal = getModal(routerPath.chat, "createChatModal");
      modal.setProps({
        ...modal.props,
        isShowModal: !modal.props.isShowModal,
      });

      break;
    }

    case "delete-chat-btn":
    case "close-modal-delete-chat": {
      const modal = getModal(routerPath.chat, "deleteChatModal");

      modal.setProps({
        ...modal.props,
        isShowModal: !modal.props.isShowModal,
      });

      break;
    }

    case "add-user-in-chat-btn":
    case "close-modal-add-user-in-chat": {
      const modal = getModal(routerPath.chat, "addUserInChatModal");

      modal.setProps({
        ...modal.props,
        isShowModal: !modal.props.isShowModal,
      });

      break;
    }

    case "delete-user-in-chat-btn":
    case "close-modal-delete-user-in-chat": {
      const modal = getModal(routerPath.chat, "deleteUserInChatModal");

      modal.setProps({
        ...modal.props,
        isShowModal: !modal.props.isShowModal,
      });

      break;
    }
    case "edit-photo-in-chat-btn":
    case "close-modal-edit-photo-in-chat": {
      const modal = getModal(routerPath.chat, "editPhotoInChatModal");

      modal.setProps({
        ...modal.props,
        isShowModal: !modal.props.isShowModal,
      });

      break;
    }
    default:
      break;
  }
};

export { toggleModal, getModal };
