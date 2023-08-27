import { Text, StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Card Caster</Text>
      <View style={styles.contentContainer}>
        <Routes></Routes>
      </View>
    </View>
  );
};

export default Main;
