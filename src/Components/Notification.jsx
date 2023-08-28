import { useSelector } from "react-redux";

import { Snackbar } from "react-native-paper";

const Notification = () => {
  const { message } = useSelector((state) => state.notification);
  if (message === null) return <></>;

  return (
    <Snackbar
      visible={true}
      onDismiss={() => {}}
      duration={3000}
    >
      {message}
    </Snackbar>
  );
};

export default Notification;
