const BaseURL = "https://ya-praktikum.tech/api/v2";

abstract class BaseAPI {
  create() {
    throw new Error("Not implemented");
  }

  public request() {
    throw new Error("Not implemented");
  }

  update() {
    throw new Error("Not implemented");
  }

  delete() {
    throw new Error("Not implemented");
  }
}

export { BaseAPI, BaseURL };
