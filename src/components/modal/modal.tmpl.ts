const modalTemplate = `
<div class='popup 
{{#unless isShowModal}}
popup__hidden
{{/unless}}
'>
    <div class='modal {{classModal}}'>
        <div class='modal__inner'>
        {{{closeCreateChatModalBtn}}}
            <div class='modal__title'>
                {{titleText}}
            </div>
            <form class='modal__form' name='{{formName}}'>
                {{#if needUsersList}}
                    <ul class='user-list'>
                    {{#each usersList}}
                        <li class='user-list__user' data-id={{this.id}} >
                            <img class='user-list__avatar' 
                            src={{#if (isDefaultAvatar this.avatar)}}{{{../default_avatar}}}{{else}}https://ya-praktikum.tech/api/v2/resources/{{{this.avatar}}}{{/if}}
                            alt='Аватар'>   
                            <div class='user-list__name'>{{this.first_name}} {{this.second_name}}</div>
                            <div class='user-list__role'>{{this.role}}</div>
                            <input type='hidden' name='users'>
                        </li>
                        
                    {{/each}}
                    </ul>
                    
                {{else}}
                    <div class='modal__inputs'>
                    <label for="title" class="label">
                        <span class="label__span label__span_hidden">{{spanName}}</span>
                        {{{inputModal}}}
                    </label>
                    </div>  
                {{/if}}
                
                <div class='modal__buttons'>
                    {{{buttonModal}}}
                </div>
            </form>
        </div?>
    </div>
</div>
`;

export { modalTemplate };
