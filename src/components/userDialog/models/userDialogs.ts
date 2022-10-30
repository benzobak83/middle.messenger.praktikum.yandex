import { UserDialog } from "../userDialog";
import { userDialogsData } from "../../../data/userDialogs";

const userDialogs: Array<UserDialog> = [];

userDialogsData.forEach((userDialog) => {
  const userDialogElement = new UserDialog({
    ...userDialog,
    settings: { withInternalID: true },
  });
  userDialogs.push(userDialogElement);
});
userDialogs[0].setProps({ ...userDialogs[0].props, ["last-msg"]: "cccc" });
export { userDialogs };
