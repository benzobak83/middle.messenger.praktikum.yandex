import { set } from "../../utils/set";
import { Indexed } from "../../utils/types";
import { EventBus } from "../event-bus/eventBus";

enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
    console.log("сет пропс");
  }
}

const store = new Store();

export { store, StoreEvents };
