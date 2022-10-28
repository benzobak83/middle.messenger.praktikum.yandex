const formSendMsgTemplate = `
<form class="chat-main__form-msg form-msg">
    <div class="form-msg__menu-hover form-msg__menu-hover_hidden menu-hover"> 
        <div class="menu-hover__inner"> 
            <div class="menu-hover__item"> 
                <label for="photo-msg" class="menu-hover__label"> 
                    <img src="../../../static/img/photo.svg" alt="Photo" class="menu-hover__img"> 
                    <button class="menu-hover__text" type="button"> 
                        <label for="photo-msg">Фото или Видео</label> 
                    </button> 
                    <input type="file" class="menu-hover__input" id="photo-msg" name="photo-msg" hidden=""> 
                </label> 
            </div> 
            <div class="menu-hover__item"> 
                <label for="file-msg" class="menu-hover__label"> 
                    <img src="../../../static/img/file.svg" alt="File" class="menu-hover__img"> 
                    <button class="menu-hover__text" type="button"> 
                        <label for="file-msg">Файл</label> 
                    </button> 
                    <input type="file" class="menu-hover__input" id="file-msg" name="file-msg" hidden=""> 
                </label> 
            </div> 
        </div> 
    </div>
    <div class="form-msg__utils">
        {{{formMsgUtilsBtn}}}
    </div>
    <div class="form-msg__messagearea-block">
        {{{msgTextAreaInputChat}}}
    </div>
    <div class="form-msg__btn-send-block">
        {{{formMsgSendBtn}}}
    </div>
</form>
`;

export { formSendMsgTemplate };
