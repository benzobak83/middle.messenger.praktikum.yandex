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
        // вызываем обновление компонента, передав данные из хранилища
        this.setProps({ ...mapStateToProps(store.getState()) });
        console.log("выполнен стор эвент");
      });
    }
  };
}

export { connect };
