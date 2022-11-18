const chatPageTemplate = `
<div class="chat-wrapper">
    <div class="chat">
        <div class="chat__inner">
            {{{sideBar}}}
            <div class="chat-main">
            {{{chatTitle}}}
            {{{chatList}}}
            {{{formSendMessage}}}
            </div>
        </div>
    </div>
    {{{createChatModal}}}
    {{{deleteChatModal}}}
    {{{addUserInChatModal}}}
    {{{deleteUserInChatModal}}}
 
</div>

`;

export { chatPageTemplate };
