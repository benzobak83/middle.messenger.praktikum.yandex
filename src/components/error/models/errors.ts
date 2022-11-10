import { btnError404, btnError500 } from "../../button/models/buttons";
import { Error } from "../error";

const error500 = new Error({
  statusCode: 500,
  statusDescription: "Мы уже фиксим",
  btnError: btnError500,
});

const error404 = new Error({
  statusCode: 404,
  statusDescription: "Не туда попали",
  btnError: btnError404,
});

console.log(error500);
console.log(error404);

export { error404, error500 };
