import { Block } from "../../core/block/block";
import { Indexed, TPropsSettings } from "../../utils/types";
import { notificationAlertTemplate } from "./notificationAlert.tmpl";
import "./notificationAlert.scss";
import { connect } from "../../utils/connect";

type TNotification = {
  text: string;
  error: boolean;
  isShow: boolean;
  settings?: TPropsSettings;
};

function mapNotificationAlertToProps(state: Indexed) {
  return {
    notification: {
      isShow: state.notification?.isShow,
      text: state.notification?.text,
      error: state.notification?.error,
    },
  };
}

class NotificationAlert<T extends object = TNotification> extends Block<T> {
  constructor(props: TNotification) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(notificationAlertTemplate, this.props as TNotification);
  }
}

export default connect(NotificationAlert, {
  mapStateToProps: mapNotificationAlertToProps,
});

export { TNotification };
