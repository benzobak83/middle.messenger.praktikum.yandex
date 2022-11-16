const sideBarTemplate = `
<aside class="side-bar">
    <div class="side-bar__top">
        <div class="side-bar__btn">
            {{{createNewChatBtn}}}
            {{{goToProfileBtn}}}
        </div>
        <div class="side-bar__search-block">
            <input type="text" name="search" id="search" class="side-bar__search-input" placeholder="Поиск">
            <img src="../../../static/img/search.svg" alt="Search" class="side-bar__search-img ">
        </div>
    </div>
    <div class="side-bar__bottom user">
        <ul class="user__inner">
            {{{userDialogs}}}
        </ul>
    </div>
</aside>
`;

export { sideBarTemplate };
