import { Error } from "../../components/error/error";
import { Block } from "../../core/block/block";

import { errorPage404Template } from "./404.tmpl";

type PageError = {
  error404?: Error;
  error500?: Error;
};
class Page404 extends Block<PageError> {
  constructor(props: PageError) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(errorPage404Template, this.props);
  }
}

export { Page404, PageError };
