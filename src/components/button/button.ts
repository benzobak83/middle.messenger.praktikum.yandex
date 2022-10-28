import { Block } from "../../core/block/block";
import { buttonTemplate } from "./button.tmpl";

type TButton = {
  text: string;
  class?: string;
  events?: Record<string, (e: Event) => void>;
  settings?: Record<string, boolean>;
  href?: string;
  type?: string;
  id?: string;
  nameInput?: string;
};

class Button extends Block {
  constructor(props: TButton) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(buttonTemplate, this.props);
  }
}

export { Button, TButton };
