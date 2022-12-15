const chatPageTemplate = `
<div class="chat-wrapper">
    <div class="chat">
        <div class="chat__inner">
            {{{sideBar}}}
            {{{chatSection}}}
        </div>
    </div>
    {{{notificationChat}}}
    {{{createChatModal}}}
    {{{deleteChatModal}}}
    {{{addUserInChatModal}}}
    {{{deleteUserInChatModal}}}
    {{{editPhotoInChatModal}}}

    {{{notificationChat}}}
 
</div>

`;

export { chatPageTemplate };
