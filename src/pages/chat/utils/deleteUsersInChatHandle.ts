import { store } from "../../../core/store/Store";

const selectUserForDeleteInChatHandle = (e: Event) => {
  const user = (e.target as HTMLElement).closest("li");
  if (!user) return;

  const idUser = user.dataset.id;
  const isAdmin =
    user.querySelector(".user-list__role")?.textContent === "admin";
  const isYou = idUser == store.getState().user.id;

  if (!idUser || isYou || isAdmin) return;

  if ((user.dataset.selected as unknown) == "true") {
    (user.dataset.selected as unknown) = "false";
  } else {
    (user.dataset.selected as unknown) = "true";
  }
};

export { selectUserForDeleteInChatHandle };
