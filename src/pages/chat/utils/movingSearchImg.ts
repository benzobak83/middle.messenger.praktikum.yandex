const movingSearchImg = {
  focus: () => {
    const imgSearch = document.querySelector(
      ".side-bar__search-img "
    ) as HTMLElement;
    imgSearch.style.left = "5px";
  },
  blur: (e: Event) => {
    if ((e.currentTarget as HTMLInputElement).value.length > 0) {
      return;
    }
    const imgSearch = document.querySelector(
      ".side-bar__search-img "
    ) as HTMLElement;
    imgSearch.style.left = "100px";
  },
};

export { movingSearchImg };
