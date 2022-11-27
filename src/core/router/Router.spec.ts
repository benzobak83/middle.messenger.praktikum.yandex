import { expect } from "chai";

describe("Router", () => {
  it("Переход на новую страницу должен менять состояние сущности history", () => {
    window.history.pushState({ page: "login" }, "Login", "/login");
    window.history.pushState({ page: "register" }, "Register", "/register");
    expect(window.history.length).to.eq(3);
  });
});
