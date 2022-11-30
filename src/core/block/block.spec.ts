import { assert } from "chai";
import { cloneDeep } from "../../utils/cloneDeep";

import { Block } from "./block";
// eslint-disable-next-line
class FakeComponent extends Block<any> {
  render(): DocumentFragment {
    return this.compile("<div>{{props}}</div>", this.props);
  }
}

const block = new FakeComponent({ props: "second props" });

describe("Block", () => {
  before(() => {
    block.setProps({ props: "init" });
  });

  it("render возвращает валидный textContent компонента", () => {
    assert.equal(block.getContent().textContent, "init");
  });

  it("setProps работает корректно, изменяя пропсы", () => {
    const oldProps = cloneDeep(block.props);
    block.setProps({ props: "setProps2" });
    assert.notEqual(block.props.props, oldProps.props);
  });

  it("setProps вызывает ререндер в случае изменения пропсов", () => {
    block.setProps({ props: "isNotEqual" });
    assert.equal(block.getContent().textContent, "isNotEqual");
  });
});
