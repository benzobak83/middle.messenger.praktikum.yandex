const chatTitleTemplate = `
<div class="chat-main__title chat-title">
    <div class="chat-title__profile">
        <div class="chat-title__avatar-block">
            <img src="{{srcAvatar}}" alt="Avatar" class="chat-title__avatar">
        </div>
        <div class="chat-title__name">{{chatName}}</div>
    </div>
    <div class="chat-title__utils">
       {{{chatTitleBtn}}}    
    </div>
    <div class="chat-title__menu-hover chat-title__menu-hover_hidden menu-hover">
  <div class="menu-hover__inner">
    <div class="menu-hover__item">
      <div class="menu-hover__label"> <img src="../../../static/img/photo.svg" alt="addUser" class="menu-hover__img">
        <button class="menu-hover__text" type="button">
        {{{addUserInChatBtn}}}
        </button>
      </div>
    </div>
    <div class="menu-hover__item">
      <div class="menu-hover__label"> <img src="../../../static/img/file.svg" alt="deleteUser" class="menu-hover__img">
        {{{deleteUserInChatBtn}}}
      </div>
    </div>
    <div class="menu-hover__item">
      <div class="menu-hover__label"> <img src="../../../static/img/file.svg" alt="deleteChat" class="menu-hover__img">
        {{{deleteChatBtn}}}
      </div>
    </div>
  </div>
</div>
</div>
`;

// {{>button/button text='<img src="../../../static/img/utils.svg" alt="Utils" id="chat-title-utils" class="chat-title__utils-img">' type="button"}}
export { chatTitleTemplate };
