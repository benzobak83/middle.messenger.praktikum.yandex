const registrationPageTemplate = `<div class="reg-wrapper">
    <div class="reg">
        <div class="reg__inner">
            <div class="reg__title title-login">
                Регистрация
            </div>
            <form class="reg__form">
                {{{labelEmail}}}
                {{{labelEmail}}}
                {{{labelLogin}}}
                {{{labelFirstName}}}
                {{{labelSecondName}}}
                {{{labelPhone}}}
                {{{labelPassword}}}
                {{{labelPasswordConfirm}}}
                <div class="reg__buttons">
                    {{{regButton}}}
                    <a class='reg__buttons-link' href="../login/login.hbs">Войти</a>
                </div>
            </form>
        </div>
    </div>
    </div>`;

export { registrationPageTemplate };
