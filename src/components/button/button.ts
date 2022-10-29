import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { buttonTemplate } from "./button.tmpl";

type TButton = {
  text: string;
  class?: string;
  events?: Record<string, (e: Event) => void>;
  settings?: TPropsSettings;
  href?: string;
  type?: string;
  id?: string;
  nameInput?: string;
};

class Button extends Block<TButton> {
  constructor(props: TButton) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(buttonTemplate, this.props);
  }
}

export { Button, TButton };
