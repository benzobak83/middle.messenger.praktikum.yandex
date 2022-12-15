const loginPageTemplate = `
<div class="reg-wrapper">
    <div class="login">
        <div class="login__inner">
            <div class="login__title title-login">
                Авторизация
            </div>
            <form class="login__form">
                <label for="login" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Логин</span>
                    {{{loginInputAuth}}}
                </label>
                 <label for="password" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Пароль</span>
                    {{{passwordInputAuth}}}
                </label>
                <div class="login__buttons">
                    {{{loginBtn}}}
                    {{{noAccountLoginBtn}}}
                    
                </div>
            </form> 
        </div>
    </div>
    {{{notificationAuth}}}
</div>`;

export { loginPageTemplate };
