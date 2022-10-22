const loginPageTemplate = `<div class="reg-wrapper">
<div class="login">
    <div class="login__inner">
    <div class="login__title title-login">
    Авторизация
</div>
        <form class="login__form">
            {{{labelLogin}}}
            {{{labelPassword}}}
            <div class="login__buttons">
                {{{loginBtn}}}
                <a class='login__buttons-link' href="../registration/registration.hbs">Нет аккаунта?</a>
            </div>
        </form> 
    </div>
</div>
</div>`;

export { loginPageTemplate };
