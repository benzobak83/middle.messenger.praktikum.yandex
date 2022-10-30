import { Error } from "../error";

const error404 = new Error({
  statusCode: 404,
  statusDescription: "Не туда попали",
  textBtn: "Назад к чатам",
});

const error500 = new Error({
  statusCode: 500,
  statusDescription: "Мы уже фиксим",
  textBtn: "Назад к чатам",
});

export { error404, error500 };
