import { set } from "../../utils/set";
import { Indexed } from "../../utils/types";
import { EventBus } from "../event-bus/eventBus";

enum StoreEvents {
  Updated = "updated",
  ForceUpdated = "forceUpdated",
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    const storeResult = set(this.state, path, value);
    this.emit(StoreEvents.Updated);
    return storeResult;
  }
}

const store = new Store();

export { store, StoreEvents };
