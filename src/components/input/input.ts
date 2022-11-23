import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
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
  forceUpdate?: number;
  events?: Record<string, (e: Event) => void>;
  settings?: TPropsSettings;
};

class Input extends Block<TInput> {
  constructor(props: TInput) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(inputTemplate, this.props);
  }
}

export { Input, TInput };
