const inputTemplate = `
<input 
{{#if classInput}}
class="{{classInput}}"
{{/if}}
type="{{typeInput}}"
name="{{nameInput}}"
{{#if placeholderInput}}
placeholder="{{placeholderInput}}"
{{/if}}
{{#if idInput}}
id="{{idInput}}"
{{/if}}
{{#if valueInput}}
value="{{valueInput}}"
{{/if}}
{{#if readonly}}
readonly
{{/if}}
{{#if hidden}}
hidden
{{/if}}
{{#if autocomplete}}
autocomplete="{{autocomplete}}"
{{/if}}
>
</input>
`;

export { inputTemplate };
