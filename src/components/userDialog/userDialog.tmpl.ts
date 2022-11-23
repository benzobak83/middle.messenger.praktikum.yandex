const userDialogTemplate = `
<li class="user__item {{#if count_unreaded_msg}}user__item_unreaded{{/if}}">
     <div class="user__avatar-block">
         <img src={{{src_avatar}}} alt="Avatar" class="user__avatar">
     </div>
     <div class="user__main">
         <div class="user__name">{{{chatName}}}</div>
         <div class="user__msg">{{#if last-msg.user.first_name}}<span class='user__msg-name'>{{{last-msg.user.first_name}}}: </span>{{/if}}{{{last-msg.content}}}</div>
     </div>
     <div class="user__msg-info">
         <time class="user__time">{{{last-msg.time}}}</time>
         <div class="user__msg-unreaded">
            <span class="user__msg-unreaded-value">
                {{#if count_unreaded_msg}}
                    {{{count_unreaded_msg}}}
                {{/if}}
            </span>
         </div>
     </div>
 </li>`;

export { userDialogTemplate };
