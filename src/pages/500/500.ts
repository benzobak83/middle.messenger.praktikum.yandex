import { Block } from "../../core/block/block";
import { PageError } from "../404/404";

import { errorPage500Template } from "./500.tmpl";

class Page404 extends Block<PageError> {
  constructor(props: PageError) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(errorPage500Template, this.props);
  }
}

export { Page404 };
