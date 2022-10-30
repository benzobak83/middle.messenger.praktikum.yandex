const registrationPageTemplate = `
<div class="reg-wrapper">
    <div class="reg">
        <div class="reg__inner">
            <div class="reg__title title-login">
                Регистрация
            </div>
            <form class="reg__form">
                <label for="email" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Почта</span>
                    {{{emailInputAuth}}}
                </label>
                <label for="login" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Логин</span>
                    {{{loginInputAuth}}}
                </label>
                <label for="first_name" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Имя</span>
                    {{{firstNameInputAuth}}}
                </label>
                <label for="second_name" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Фамилия</span>
                    {{{secondNameInputAuth}}}
                </label>
                <label for="phone" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Телефон</span>
                    {{{phoneInputAuth}}}
                </label>
                <label for="password" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Пароль</span>
                    {{{passwordInputAuth}}}
                </label>
                <label for="password-confirm" class="reg__form-label label">
                    <span class="label__span label__span_hidden">Подтверждение пароля</span>
                    {{{passwordConfirmInputAuth}}}
                </label>
                
                <div class="reg__buttons">
                    {{{regButton}}}
                    <a class='reg__buttons-link' href="../login/login.html">Войти</a>
                </div>
            </form>
        </div>
    </div>
    </div>
`;

export { registrationPageTemplate };
