const errorTemplate = `
 <div class="error-page error">
    <div class="error__inner">
        <div class="error__status">
            <div class="error__code">{{statusCode}}</div>
            <div class="error__description">{{statusDescription}}</div>
        </div>
        <div class="error__buttons">
            <a href="../chat/chat.html" class="error__btn error__btn_back">{{textBtn}}</a>
        </div>
    </div>
</div>
`;

export { errorTemplate };
