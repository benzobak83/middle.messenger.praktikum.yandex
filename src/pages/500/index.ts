import { Block } from "../../core/block/block";
import { TPageError } from "../404/index";
import { error500 } from "../../components/error/models/errors";
import { errorPage500Template } from "./500.tmpl";
import { connect } from "../../utils/connect";

function map500ToProps() {
  return {};
}

class Page500<T extends object = TPageError> extends Block<T> {
  constructor() {
    super({ error500: error500 });
  }

  render(): DocumentFragment {
    return this.compile(errorPage500Template, this.props as TPageError);
  }
}

export default connect(Page500, { mapStateToProps: map500ToProps });
