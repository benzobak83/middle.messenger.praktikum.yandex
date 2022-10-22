 const chatTitleTemplate = `<div class="chat-main__title chat-title">
    <div class="chat-title__profile">
        <div class="chat-title__avatar-block">
            <img src="{{srcAvatar}}" alt="Avatar" class="chat-title__avatar">
        </div>
        <div class="chat-title__name">{{userName}}</div>
    </div>
    <div class="chat-title__utils">
       {{{chatTitleBtn}}}    
    </div>
    {{#with menuHover/chat_controller_menu}}
        {{> menuHover/menuHover className="chat-title__menu-hover"}}
    {{/with}}
</div>`

// {{>button/button text='<img src="../../../static/img/utils.svg" alt="Utils" id="chat-title-utils" class="chat-title__utils-img">' type="button"}}
export {chatTitleTemplate}