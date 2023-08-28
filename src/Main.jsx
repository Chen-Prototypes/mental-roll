import { StyleSheet, View } from "react-native";
import { Route, Routes, useNavigate } from "react-router-native";
import Constants from "expo-constants";
import { BottomNavigation } from "react-native-paper";
import { useState } from "react";

import AddCard from "./Pages/AddCard";
import FlashcardViewer from "./Pages/FlashcardViewer";

import Notification from "./Components/Notification";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    paddingTop: 180,
    backgroundColor: "rgb(255, 251, 255)",
  },
  contentContainer: {
    flex: 1,
  },
});

const Main = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const routes = [
    { key: "flash", title: "Cards", focusedIcon: "flash", path: "/" },
    {
      key: "add-card",
      title: "Add Card",
      focusedIcon: "plus",
      path: "/add-card",
    },
  ];

  const handleTabPress = (newIndex) => {
    setIndex(newIndex);
    navigate(routes[newIndex].path);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Routes>
          <Route path="/" element={<FlashcardViewer />} />
          <Route path="/add-card" element={<AddCard />} />
        </Routes>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={handleTabPress}
          renderScene={({ route, jumpTo }) => {}}
        />
      </View>
      <Notification />
    </View>
  );
};

export default Main;
