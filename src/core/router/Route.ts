import { render } from "../../utils/render";
import type { Block } from "../block/block";

type TProps = Record<string, string | number>;
type TBlock = null | IBlock;
type TPathname = string;

// eslint-disable-next-line
interface IBlock extends Block<any> {
  render(): DocumentFragment;
  new (): TBlock;
}

class Route {
  protected _pathname: TPathname;
  protected _blockClass: IBlock;
  protected _block: TBlock;
  protected _props: TProps;

  constructor(
    pathname: TPathname,
    view: IBlock,
    props: Record<string, string | number>
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: TPathname) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    (this._block as IBlock).hide();
  }

  isPrimitiveEqual(
    val1: string | number | boolean,
    val2: string | number | boolean
  ) {
    return val1 === val2;
  }

  match(pathname: TPathname) {
    return this.isPrimitiveEqual(pathname, this._pathname);
  }

  getBlock(): TBlock {
    return this._block;
  }

  render() {
    if (!this._block) {
      // eslint-disable-next-line
      this._block = new this._blockClass();
      render(this._props.rootQuery as string, this._block as IBlock);
    } else this._block.show();
  }
}

export { Route, TPathname, IBlock, TBlock };
