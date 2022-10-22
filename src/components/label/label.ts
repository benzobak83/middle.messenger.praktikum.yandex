import { Block } from "../../core/block/block";
import { labelTemplate } from "./label.tmpl";

type TLabel = {
  span_name: string;
  events?: Record<string, (event: Event) => void>;
  settings?: Record<string, boolean>;
  type?: string;
  id?: string;
};

class Label extends Block {
  constructor(props: TLabel) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(labelTemplate, this.props);
  }
}

export { Label, TLabel };
