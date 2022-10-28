const userDialogTemplate = `
<li class="user__item {{#if count_unreaded_msg}}user__item_unreaded{{/if}}">
     <div class="user__avatar-block">
         <img src={{{src_avatar}}} alt="Avatar" class="user__avatar">
     </div>
     <div class="user__main">
         <div class="user__name">{{{nameUser}}}</div>
         <div class="user__msg">{{{last-msg}}}</div>
     </div>
     <div class="user__msg-info">
         <time class="user__time">{{date_msg}}</time>
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
