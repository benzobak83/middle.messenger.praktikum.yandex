const toggleHoverMenu = (e: Event) => {
  const hoverMenu =
    (e.currentTarget &&
      (e.currentTarget as HTMLElement)?.parentNode?.parentNode?.querySelector(
        ".menu-hover"
      )) ||
    (e.currentTarget as HTMLElement)?.closest(".menu-hover");

  if (hoverMenu) {
    const className = hoverMenu.className.split(" ")[0];
    hoverMenu.classList.toggle(`${className}_hidden`);
  }
};

export { toggleHoverMenu };
