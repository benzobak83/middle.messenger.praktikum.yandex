import { Block } from "../../core/block/block";
import { errorTemplate } from "./error.tmpl";

type TError = {
  statusCode: number;
  statusDescription: string;
  textBtn: string;
};

class Error extends Block {
  constructor(props: TError) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(errorTemplate, this.props);
  }
}

export { Error, TError };
