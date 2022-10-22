const chatPageTemplate = `<div class="chat-wrapper">
<div class="chat">
    <div class="chat__inner">
        {{{sideBar}}}
        <div class="chat-main">
        {{{chatTitle}}}
        {{{chatList}}}
        </div>
    </div>
</div>
</div>`;

export { chatPageTemplate };

//
//             {{>chatTitle/chatTitle name='Чек' srcAvatar='../../../static/img/default_avatar.png'}}
//             {{>chatList/chatList}}
//             {{>formSendMessage/formSendMessage}}
//
