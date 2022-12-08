const chatPageTemplate = `
<div class="chat-wrapper">
    <div class="chat">
        <div class="chat__inner">
            {{{sideBar}}}
            <div class="chat-main">
            {{#if active_chat_id}}
            {{{chatTitle}}}
            {{{chatList}}}
            {{{formSendMessage}}}
            {{else}}
            <div class='chat__stub stub'>
                <div class='chat__stub-text'>Выберите чат, чтобы отправить сообщение</div>
            </div>
            {{/if}}
            </div>
        </div>
    </div>
    {{{notificationChat}}}
    {{{createChatModal}}}
    {{{deleteChatModal}}}
    {{{addUserInChatModal}}}
    {{{deleteUserInChatModal}}}
    {{{editPhotoInChatModal}}}

    {{#with notification}}
    <div>
    {{#if isShow}}
    <div class='notification {{#if error}}notification__error {{else}}notification__suc{{/if}}'>
    <div class='notification__img'></div>
    <div class='notification__text'>{{{text}}}</div>
    </div>
    {{else}}
    {{/if}}
    </div>
    {{/with}}
 
</div>

`;

export { chatPageTemplate };
