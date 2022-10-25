const profilePageTemplate = `
<div class="profile-page-wrapper">
  <div class="back">
    <a href="./profile.hbs">
        <img src="../../../static/img/back.svg" alt="Back" class="back__img">
        </a>
    </div>
   <div class="profile-wrapper">
    <div class="profile">
        <div class="profile__inner">
            <div class="profile__title">
                <label for="avatar" class="profile__avatar-block" >
                    <img src="../../../static/img/default_avatar.png" alt="Avatar" class="profile__avatar">
                    {{{avatarInputProfile}}}
                </label>
                <div class="profile__name">Иван</div>
            </div>
            <form action="" class="profile__info-form">
            <div class="profile__info">
                <div class="profile__info-list">
                <div class="profile__info-item">
                   <div class="profile__info-name">Почта</div>
                   <div class="profile__info-value-block">
                       {{{emailInputProfile}}}
                   </div>
                </div>
                <div class="profile__info-item">
                   <div class="profile__info-name">Логин</div>
                   <div class="profile__info-value-block">
                       {{{loginInputProfile}}}
                   </div>
                </div>
                <div class="profile__info-item">
                   <div class="profile__info-name">Имя</div>
                   <div class="profile__info-value-block">
                       {{{nameInputProfile}}}
                   </div>
                </div>
                <div class="profile__info-item">
                   <div class="profile__info-name">Фамилия</div>
                   <div class="profile__info-value-block">
                       {{{secondNameInputProfile}}}
                   </div>
                </div>
                <div class="profile__info-item">
                   <div class="profile__info-name">Имя в чате</div>
                   <div class="profile__info-value-block">
                       {{{displayNameInputProfile}}}
                   </div>
                </div>
                <div class="profile__info-item">
                   <div class="profile__info-name">Телефон</div>
                   <div class="profile__info-value-block">
                       {{{phoneInputProfile}}}
                   </div>
                </div>
                </div>
            </div>
            <div class="profile__buttons">
                <div class="profile__btn-block">
                {{{editInfoProfileBtn}}}  
                </div>
                <div class="profile__btn-block">
                {{{editPasswordProfileBtn}}}
                </div>
                <div class="profile__btn-block">
                {{{exitProfileBtn}}}
                </div>
                <div class="profile__btn-save-block">
                {{{saveInfoProfileBtn}}}
                </div>
            </div>
            </form>
            <form action="" class="profile__change-password-form">
            <div class="profile__info">
                <div class="profile__info-list">
                <div class="profile__info-item">
                   <div class="profile__info-name">Старый пароль</div>
                   <div class="profile__info-value-block">
                       {{{oldPasswordInputProfile}}}
                   </div>
                </div>
                <div class="profile__info-item">
                   <div class="profile__info-name">Новый пароль</div>
                   <div class="profile__info-value-block">
                       {{{newPasswordInputProfile}}}
                   </div>
                </div>
                <div class="profile__info-item">
                   <div class="profile__info-name">Повторите новый пароль</div>
                   <div class="profile__info-value-block">
                       {{{repeatPasswordInputProfile}}}
                   </div>
                </div>
                </div>
            </div>
            <div class="profile__buttons profile__buttons_edit">
                <div class="profile__btn-save-block">
                {{{saveChangePasswordProfileBtn}}}
                </div>
            </div>
            </form>
        </div>
    </div>
   </div>
   </div>
`;

export { profilePageTemplate };
