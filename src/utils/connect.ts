import { Block } from "../core/block/block";
import { store, StoreEvents } from "../core/store/Store";
import { Indexed } from "./types";

function connect<Props extends object>(
  Component: typeof Block,
  mapStateToProps: (state: Indexed) => Props
) {
  return class extends Component<Props> {
    constructor(props: Indexed) {
      super({ ...props, ...mapStateToProps(store.getState()) });

      // подписываемся на событие

      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
        console.log("выполнен апдейт");
      });

      store.on(StoreEvents.ForceUpdated, () => {
        this.setProps({
          ...mapStateToProps(store.getState()),
          forceUpdate: Math.random(),
        });
        console.log("выполнен форсапдейт");
      });
    }
  };
}

export { connect };
