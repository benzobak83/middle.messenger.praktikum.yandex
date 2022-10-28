import { isEqual } from "../../utils/isEqual";
import { EventBus } from "../event-bus/eventBus";
import { v4 as makeUUID } from "uuid";
import Handlebars from "handlebars";

type tMeta = {
  tagName: string;
  props: object;
};

abstract class Block {
  static EVENTS: Record<string, string> = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  protected _element: HTMLElement;
  protected _meta: tMeta;
  // eslint-disable-next-line
  public props: Record<string, any>;
  public children: Record<string, Block>;
  protected eventBus: EventBus;
  protected _id: string | null = null;
  protected _needId: boolean;

  protected constructor(
    // eslint-disable-next-line
    propsAndChildren: Record<string, any>
  ) {
    const { children, props } = this._getChildren(propsAndChildren);

    this.eventBus = new EventBus();
    this._meta = {
      tagName: "template",
      props,
    };
    this._needId = props.settings?.withInternalID;
    this._id = this._needId ? makeUUID() : null;
    this.props = this._makePropsProxy({ ...props, _id: this._id });
    this.children = this._makePropsProxy({ ...children });

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  protected _getChildren<T>(propsAndChildren: Record<string, T>) {
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
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  // eslint-disable-next-line
  protected componentDidMount(): void {}

  protected dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  protected _componentDidUpdate(oldProps: object, newProps: object): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) return;
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidUpdate(oldProps: object, newProps: object): boolean {
    return !isEqual(oldProps, newProps);
  }

  public setProps = (nextProps: object) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public setChildren = (nextChildren: object) => {
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
      // чтобы отрендерить массив детей без заглушки, рендерим всех
      // детей перед заглушкой и последнего ребенка вместо заглушки
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
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  protected _removeEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  protected _render() {
    const block = this.render();
    this._removeEvents();
    const contentInsertFragment = block.firstElementChild as HTMLElement;
    // навешиваю айди template еще и на чилдрена, так как template
    //  удалится и нужно будет взаимодействовать с содержимым
    this._setId(contentInsertFragment);
    this._element.replaceWith(contentInsertFragment);
    this._element = contentInsertFragment;
    this._addEvents();
  }

  abstract render(): DocumentFragment;

  public getContent(): HTMLElement {
    return this.element;
  }

  protected _makePropsProxy<T>(props: Record<string, T>): Record<string, T> {
    return new Proxy(props, {
      get: (target, prop: string): T => {
        const value = target[prop];
        return typeof value === "function" ? value.bind(this) : value;
      },
      set: (target, prop, value): boolean => {
        const oldTarget = { ...target };
        target[prop as string] = value;
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
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
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return element;
  }

  protected show() {
    this.getContent().style.display = "block";
  }

  protected hide() {
    this.getContent().style.display = "none";
  }
}

export { Block };
