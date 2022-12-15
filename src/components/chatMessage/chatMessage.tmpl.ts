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
{{#if file}}
<img class="messages__img" src='https://ya-praktikum.tech/api/v2/resources{{file.path}}'>
<time class="messages__date">
        {{#formatDate file.upload_date}}{{/formatDate}}
     </time>    
    
{{else}}
    <div class="messages__text">
        {{messageText}}
    </div>
     <time class="messages__date">
        {{messageDate}}
     </time>
{{/if}}
 </li>
 `;

export { chatMessageTemplate };
