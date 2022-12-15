const notificationAlertTemplate = `
<div>
{{#with notification}}
    {{#if isShow}}
    <div class='notification {{#if error}}notification__error {{else}}notification__suc{{/if}}'>
    <div class='notification__img'></div>
    <div class='notification__text'>{{{text}}}</div>
    </div>
    {{else}}
    {{/if}}
   
    {{/with}}
    </div>
`;

export { notificationAlertTemplate };
