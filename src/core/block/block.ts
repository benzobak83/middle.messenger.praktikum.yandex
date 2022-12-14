import { isEqual } from "../../utils/isEqual";
import { EventBus } from "../event-bus/eventBus";
import { v4 as makeUUID } from "uuid";
import Handlebars from "handlebars";
import { cloneDeep } from "../../utils/cloneDeep";
import { TBlock } from "../router/Route";

type TMeta = {
  tagName: string;
  props: unknown;
};
type TChildren<T extends object> = Record<string, Block<T>>;
type TEvents = Record<string, Record<string, () => void>>;
type TSettings = Record<string, string | boolean>;

abstract class Block<Props extends object> {
  static EVENTS: Record<string, string> = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  protected _element: HTMLElement;
  protected _meta: TMeta;
  public props: Props;
  public children: TChildren<Props>;
  protected eventBus: EventBus;
  protected _id: string | null = null;
  protected _needId: boolean;
  protected isMounted: boolean;
  protected _defaultClass: string | undefined;

  constructor(propsAndChildren: Record<string, unknown>) {
    const { children, props } = this._setChildren(propsAndChildren);

    this.eventBus = new EventBus();
    this._meta = {
      tagName: "template",
      props,
    };
    this._needId = (props.settings as TSettings)?.withInternalID as boolean;
    this._defaultClass = (props.settings as TSettings)
      ?.withDefaultClass as string;
    this._id = this._needId ? makeUUID() : null;
    this.props = this._makePropsProxy({ ...props, _id: this._id }) as Props;
    this.children = this._makePropsProxy({ ...children }) as TChildren<Props>;
    this.isMounted = false;

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  protected _setChildren<T>(propsAndChildren: Record<string, T>) {
    const children: Record<string, T> = {};
    const props: Record<string, T> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((obj) => {
          if (obj instanceof Block) {
            children[key] = value;
          } else {
            props[key] = value;
          }
        });
        return;
      }
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  public getChildren(): TChildren<Props> {
    return this.children;
  }
  public getChild(nameChild: string): TBlock {
    return this.children[nameChild] as TBlock;
  }
  protected _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  protected _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  protected init() {
    this._createResources();

    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  protected _componentDidMount(): void {
    Object.values(this.children as TChildren<Block<Props>>).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((item) => {
          item.dispatchComponentDidMount();
        });
      } else child.dispatchComponentDidMount();
    });
    this.componentDidMount();
  }

  // eslint-disable-next-line
  protected componentDidMount(): void {}
  // eslint-disable-next-line
  protected componentDidUnmount(): void {}

  public dispatchComponentDidMount(): void {
    if (!this.isMounted) {
      this.isMounted = true;
    } else return;
    setTimeout(() => this.eventBus.emit(Block.EVENTS.FLOW_CDM), 0);
  }

  protected _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) return;
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return isEqual(oldProps, newProps);
  }

  public setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };
  // eslint-disable-next-line
  public setChildren = (nextChildren: any) => {
    if (!nextChildren) {
      return;
    }

    Object.assign(this.children, nextChildren);
  };

  protected get element() {
    return this._element;
  }

  protected compile<T>(
    tmpl: string,
    props: Record<string, T>
  ): DocumentFragment {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      (propsAndStubs[key] as unknown) = `<div data-id="${child._id}"></div>`;
    });

    const fragment: HTMLTemplateElement =
      this._createDocumentElement("template");
    fragment.innerHTML = Handlebars.compile(tmpl)(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      // ?????????? ?????????????????????? ???????????? ?????????? ?????? ????????????????, ???????????????? ????????
      // ?????????? ?????????? ?????????????????? ?? ???????????????????? ?????????????? ???????????? ????????????????
      if (Array.isArray(child)) {
        child.forEach((item, index) => {
          if (index === child.length - 1) {
            stub?.replaceWith(item.getContent());
          } else {
            stub?.before(item.getContent());
          }
        });
      } else {
        stub?.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }

  protected _addEvents(): void {
    const { events } = this.props as TEvents;

    if (events) {
      Object.keys(events).forEach((eventName: string) => {
        this._element.addEventListener(eventName, events[eventName]);
      });
    }
  }

  protected _removeEvents(): void {
    const { events } = this.props as TEvents;

    if (events) {
      Object.keys(events).forEach((eventName: string) => {
        this._element.removeEventListener(eventName, events[eventName]);
      });
    }
  }

  protected _render() {
    const block = this.render();
    this._removeEvents();
    const contentInsertFragment = block.firstElementChild as HTMLElement;
    // ?????????????????? ???????? template ?????? ?? ???? ????????????????, ?????? ?????? template
    //  ???????????????? ?? ?????????? ?????????? ?????????????????????????????????? ?? ????????????????????
    this._setId(contentInsertFragment);
    this._element.replaceWith(contentInsertFragment);
    this._element = contentInsertFragment;
    this._addEvents();

    this.dispatchComponentDidMount();
  }

  abstract render(): DocumentFragment;

  public getContent(): HTMLElement {
    return this.element;
  }

  protected _makePropsProxy<T>(props: Record<string, T>) {
    return new Proxy(props, {
      get: (target, prop: string): T => {
        const value = target[prop];
        return typeof value === "function" ? value.bind(this) : value;
      },
      set: (target, prop, value): boolean => {
        const oldTarget = cloneDeep(target);

        target[prop as string] = value;

        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("?????? ??????????????");
      },
    });
  }
  protected _setId(element: HTMLElement) {
    if (this._id !== null) {
      element.setAttribute("data-id", this._id);
    }
  }
  protected _createDocumentElement(tagName: string): HTMLTemplateElement {
    const element = document.createElement(tagName) as HTMLTemplateElement;

    this._setId(element);
    // ?????????? ?????????????? ??????????, ?????????????? ?????????? ?????????????????? ?? ?????????? ?????????????? ?????????? ?????????????????? ????????????
    return element;
  }

  show() {
    this.getContent().style.display = this._defaultClass
      ? this._defaultClass
      : "block";
  }

  hide() {
    this.componentDidUnmount();
  }
}

export { Block, TChildren };
