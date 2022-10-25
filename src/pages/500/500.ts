import { Block } from "../../core/block/block";

import { errorPage500Template } from "./500.tmpl";

class Page404 extends Block {
  constructor(props: object) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(errorPage500Template, this.props);
  }
}

export { Page404 };