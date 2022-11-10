import { Block } from "../../core/block/block";
import { PageError } from "../404/404";
import { error500 } from "../../components/error/models/errors";
import { errorPage500Template } from "./500.tmpl";

class Page500 extends Block<PageError> {
  constructor() {
    super({ error500: error500 });
  }

  render(): DocumentFragment {
    return this.compile(errorPage500Template, this.props);
  }
}

export { Page500 };
