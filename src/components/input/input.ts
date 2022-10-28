import { Block } from "../../core/block/block";
import { inputTemplate } from "./input.tmpl";

type TInput = {
  classInput?: string;
  typeInput: string;
  idInput?: string;
  nameInput: string;
  placeholderInput?: string;
  valueInput?: string | number;
  readonly?: boolean;
  hidden?: boolean;
  autocomplete?: string;
  events?: Record<string, (event: Event) => void>;
  settings?: Record<string, boolean>;
};

class Input extends Block {
  constructor(props: TInput) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(inputTemplate, this.props);
  }
}

export { Input, TInput };
