import { Error } from "../../components/error/error";
import { Block } from "../../core/block/block";

import { errorPage404Template } from "./404.tmpl";
import { error404 } from "../../components/error/models/errors";

import "../../global-styles/global.scss";
import "../../components/error/error.scss";

type PageError = {
  error404?: Error;
  error500?: Error;
};
class Page404 extends Block<PageError> {
  constructor() {
    super({
      error404: error404,
    });
  }

  render(): DocumentFragment {
    console.log("render");
    return this.compile(errorPage404Template, this.props);
  }
}

export { Page404, PageError };
