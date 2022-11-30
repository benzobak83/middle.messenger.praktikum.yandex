import { assert } from "chai";

import { HTTPTransport } from "./HTTPTransport";

describe("HTTPTransport", () => {
  const http = new HTTPTransport("");
  it("Should exist", () => {
    assert.exists(http);
  });
  it("Get request", (done) => {
    http
      .get("https://jsonplaceholder.typicode.com/")
      .then(() => {
        done();
      })
      .catch((e) => {
        done(new Error(e.response));
      });
  });
});
