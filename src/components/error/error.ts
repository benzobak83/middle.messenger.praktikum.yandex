import { Block } from "../../core/block/block";
import { Button } from "../button/button";
import { errorTemplate } from "./error.tmpl";

type TError = {
  statusCode: number;
  statusDescription: string;
  btnError: Button;
};

class Error extends Block<TError> {
  constructor(props: TError) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(errorTemplate, this.props);
  }
}

export { Error, TError };
