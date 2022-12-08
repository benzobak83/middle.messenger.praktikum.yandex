import { store } from "../core/store/Store";

const notificationHandle = (text: string, error: boolean) => {
  store.set("notification.isShow", true);
  store.set("notification.text", text);
  store.set("notification.error", error);

  setTimeout(() => {
    store.set("notification.isShow", false);
  }, 3650);
};

export { notificationHandle };
