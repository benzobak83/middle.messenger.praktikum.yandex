const modalTemplate = `
<div class='popup 
{{#unless isShowModal}}
popup__hidden
{{/unless}}
'>
    <div class='modal'>
        <div class='modal__inner'>
        {{{closeCreateChatModalBtn}}}
            <div class='modal__title'>
                {{titleText}}
            </div>
            <form class='modal__form' name='{{formName}}'>
                <div class='modal__inputs'>
                <label for="title" class="label">
                    <span class="label__span label__span_hidden">{{spanName}}</span>
                    {{{inputModal}}}
                </label>
                </div>
                <div class='modal__buttons'>
                    {{{buttonModal}}}
                </div>
            </form>
        </div?>
    </div>
</div>
`;

export { modalTemplate };
