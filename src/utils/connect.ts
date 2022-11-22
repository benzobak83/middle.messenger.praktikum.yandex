import { Block } from "../core/block/block";
import { store, StoreEvents } from "../core/store/Store";
import { cloneDeep } from "./cloneDeep";
import isDeepEqual from "./idDeepEqual";
import { Indexed } from "./types";

type TStateFiltered<Props extends object> = {
  mapStateToProps?: (state: Indexed) => Props;
  // eslint-disable-next-line
  mapStateToChildrens?: (state: Indexed) => any;
};

function connect<Props extends object>(
  Component: typeof Block,
  stateFiltered: TStateFiltered<Props>
) {
  return class extends Component<Props> {
    constructor(props: Indexed) {
      let stateForChildrens = {};
      let stateForProps = {};
      super({ ...props });

      store.on(StoreEvents.Updated, () => {
        if (stateFiltered.mapStateToProps) {
          const newState = stateFiltered.mapStateToProps(store.getState());
          if (!newState) return;

          if (!isDeepEqual(stateForProps, newState)) {
            this.setProps({
              ...stateFiltered.mapStateToProps(store.getState()),
            });
            stateForProps = cloneDeep(newState);
          }
        }
        if (stateFiltered.mapStateToChildrens) {
          const newState = stateFiltered.mapStateToChildrens(store.getState());

          if (!newState) return;

          if (!isDeepEqual(stateForChildrens, newState)) {
            this.setChildren({
              ...stateFiltered.mapStateToChildrens(store.getState()),
            });
          }

          stateForChildrens = newState;
        }
      });
    }
  };
}

export { connect };
