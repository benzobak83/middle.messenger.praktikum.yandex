import { Block } from "../../core/block/block";
import { TPropsSettings } from "../../utils/types";
import { notificationAlertTemplate } from "./notificationAlert.tmpl";
import "./notificationAlert.scss";

type TNotification = {
  text: string;
  error: boolean;
  isShow: boolean;
  settings?: TPropsSettings;
};

class NotificationAlert extends Block<TNotification> {
  constructor(props: TNotification) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(notificationAlertTemplate, this.props);
  }
}

export { NotificationAlert, TNotification };
