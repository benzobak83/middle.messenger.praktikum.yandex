const buttonTemplate = `
{{#if href}}
    <a href="{{href}}" class="{{class}}" 
    {{#if id}}
        id="{{id}}"
    {{/if}}
    >{{{text}}}</a>
{{else}}
<button 
class="{{class}}" 
{{#if type}}
    type="{{type}}"
{{/if}}
{{#if id}}
    id="{{id}}"
{{/if}}
>
    {{#if nameInput}}
        <label for="{{nameInput}}">{{text}}</label>
    {{else}}
    {{{text}}}
{{/if}}
</button>
{{/if}}
`;

export { buttonTemplate };
