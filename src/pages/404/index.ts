import { Error } from "../../components/error/error";
import { Block } from "../../core/block/block";

import { errorPage404Template } from "./404.tmpl";
import { error404 } from "../../components/error/models/errors";

import "../../global-styles/global.scss";
import "../../components/error/error.scss";
import { connect } from "../../utils/connect";

type TPageError = {
  error404?: Error;
  error500?: Error;
};

function map404ToProps() {
  return {};
}

class Page404<T extends object = TPageError> extends Block<T> {
  constructor() {
    super({
      error404: error404,
    });
  }

  render(): DocumentFragment {
    return this.compile(
      errorPage404Template,
      this.props as Record<string, unknown>
    );
  }
}

export { TPageError };
export default connect(Page404, { mapStateToProps: map404ToProps });
