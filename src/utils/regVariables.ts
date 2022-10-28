const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regLogin = /(?=^[a-zA-Z\d\-\_]{3,20}$)/;
const regOnlyLettersCirAndLat = /[A-Z А-Я Ё][a-z а-я -]+$/;
const regOnlyLettersLat = /[A-Za-z]/;
const regOnlyUpperCirAndLat = /[A-ZА-Я]/;
const regOnlyNum = /\d/;
const regAllWithoutNumAndPlus = /[^0-9\+]/;
const regPhone = /(?=^\+?\d{10,15}$)/;
const regPassword = /(?=^[A-ZА-Яа-яa-z\d.]{8,40}$)/;

export {
  regEmail,
  regLogin,
  regOnlyLettersCirAndLat,
  regOnlyLettersLat,
  regOnlyUpperCirAndLat,
  regOnlyNum,
  regPhone,
  regPassword,
  regAllWithoutNumAndPlus,
};
