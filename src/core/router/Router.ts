import { Route, TBlock, TPathname } from "./Route";

class Router {
  static __instance: Router;
  protected routes: Route[];
  protected history: History;
  protected _currentRoute: Route | null;
  protected _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this.history = window.history;

    Router.__instance = this;
  }
  // eslint-disable-next-line
  use(pathname: TPathname, block: any) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event) => {
      this._onRoute((event.currentTarget as Window)?.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: TPathname) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }
    console.log(pathname);
    this._currentRoute = route;
    route.render();
  }

  go(pathname: TPathname) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: TPathname): Route {
    return this.routes.find((route) => route.match(pathname)) as Route;
  }

  public getComponent(pathname: TPathname): TBlock {
    return this.getRoute(pathname).getBlock();
  }
}

export { Router };
