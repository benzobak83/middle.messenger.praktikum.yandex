import { Block } from "../../core/block/block";

import { errorPage404Template } from "./404.tmpl";

class Page404 extends Block {
  constructor(props: object) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(errorPage404Template, this.props);
  }
}

export { Page404 };
