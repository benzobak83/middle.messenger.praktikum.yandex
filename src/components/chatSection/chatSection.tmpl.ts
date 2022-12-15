const chatSectionTemplate = `<div class="chat-main">
{{#if active_chat_id}}
{{{chatTitle}}}
{{{chatList}}}
{{{formSendMessage}}}
{{else}}
<div class='chat__stub stub'>
    <div class='chat__stub-text'>Выберите чат, чтобы отправить сообщение</div>
</div>
{{/if}}
</div>`;

export { chatSectionTemplate };
