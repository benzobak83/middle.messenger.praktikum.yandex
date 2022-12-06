import { toggleHoverMenu } from "./toggleHoverMenu";

const hiddenMenuHover = () => {
  document.querySelectorAll(".menu-hover__text").forEach((element) => {
    element.addEventListener("click", toggleHoverMenu);
  });
};

export { hiddenMenuHover };
