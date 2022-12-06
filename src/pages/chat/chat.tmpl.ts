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
    {{{createChatModal}}}
    {{{deleteChatModal}}}
    {{{addUserInChatModal}}}
    {{{deleteUserInChatModal}}}
    {{{editPhotoInChatModal}}}
 
</div>

`;

export { chatPageTemplate };
