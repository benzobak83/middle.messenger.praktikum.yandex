const toggleHoverMenu = (event: Event) => {
  const hoverMenu =
    event.currentTarget &&
    (event.currentTarget as HTMLElement)?.parentNode?.parentNode?.querySelector(
      ".menu-hover"
    );

  if (hoverMenu) {
    const className = hoverMenu.className.split(" ")[0];
    hoverMenu.classList.toggle(`${className}_hidden`);
  }
};

export { toggleHoverMenu };
