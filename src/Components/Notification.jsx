import { useSelector } from "react-redux";

import { StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

const Notification = () => {
  const { message } = useSelector((state) => state.notification);
  if (message === null) return <></>;

  return (
    <Snackbar
      style={styles.snackbar}
      visible={true}
      onDismiss={() => {}}
      duration={3000}
    >
      {message}
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackbar: {},
});

export default Notification;
