let isFirstStartHiddenHoverMenuFunc = true;

const hiddenHoverMenu = (menuSelector: string) => {
  // закрываю меню при клике на отправку фото(костыль с целью экономии времени)
  if (!isFirstStartHiddenHoverMenuFunc) return;
  isFirstStartHiddenHoverMenuFunc = false;

  const menu = document.querySelector(menuSelector);
  console.log(menu);

  if (menu) {
    const menuInner = menu.querySelector(".menu-hover__inner");

    menuInner?.addEventListener("click", hiddenHoverMenuAction);
  }

  function hiddenHoverMenuAction(e: Event) {
    if ((e.target as HTMLElement).tagName === "DIV") return;
    const menuSelectorWithoutDot = menuSelector.substring(1);

    menu?.classList.add(`${menuSelectorWithoutDot}_hidden`);
  }
};

export { hiddenHoverMenu };
