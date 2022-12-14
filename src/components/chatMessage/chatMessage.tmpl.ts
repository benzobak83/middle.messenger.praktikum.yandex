const chatMessageTemplate = `
<li 
class="messages__item 
{{#if isUser}} 
    messages__user 
    {{#if isReaded}}
        messages__user_readed  
    {{else}}
        messages__user_unreaded
    {{/if}}
{{else}}
    messages__friend
{{/if}}">
    <div class="messages__text">
        {{messageText}}
    </div>
     <time class="messages__date">
        {{messageDate}}
     </time>
 </li>
 `;

export { chatMessageTemplate };
