import { assert } from "chai";
import { cloneDeep } from "../../utils/cloneDeep";

import { Block } from "./block";
// eslint-disable-next-line
class DummyComponent extends Block<any> {
  render(): DocumentFragment {
    return this.compile("<div>check</div>", { props: "init props" });
  }
}

const block = new DummyComponent({ props: "second props" });

describe("Block", () => {
  before(() => {
    block.setProps({ props: "setProps" });
  });

  it("метод render возвращает правильное содержимое", () => {
    assert.equal(block.getContent().textContent, "check");
  });

  it("setProps меняет пропсы компонента", () => {
    const oldProps = cloneDeep(block.props);
    block.setProps({ props: "setProps2" });
    assert.notEqual(block.props.props, oldProps.props);
  });
});
