import { Block } from "../core/block/block";
import { routerPath } from "../core/router/routerPathVar";
import { router } from "../index";
import { TChatPageProps } from "../pages/chat/index";

const toggleModal = (e: Event) => {
  e.preventDefault();
  const idBtn = (e.currentTarget as HTMLElement).getAttribute("id");

  function getModal(path: string, modalName: string) {
    const childrens = (
      router.getRoute(path).getBlock() as Block<TChatPageProps>
    ).getChildren();
    // eslint-disable-next-line
    const modal = childrens[modalName] as any;
    return modal;
  }

  switch (idBtn) {
    case "create-new-chat-btn":
    case "close-modal-create-chate": {
      const modal = getModal(routerPath.chat, "profileCreateChatModal");
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

export { toggleModal };
