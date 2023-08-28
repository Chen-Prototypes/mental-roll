import { StyleSheet, View } from "react-native";
import { Route, Routes, useNavigate } from "react-router-native";
import Constants from "expo-constants";
import { BottomNavigation } from "react-native-paper";
import { useState } from "react";

import AddCard from "./Pages/AddCard";
import Practice from "./Pages/Practice";
import CardsView from "./Pages/CardsView";

import Notification from "./Components/Notification";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
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
    { key: "roll", title: "Roll", focusedIcon: "flash", path: "/" },
    {
      key: "add-card",
      title: "Add Card",
      focusedIcon: "plus",
      path: "/add-card",
    },
    {
      key: "cards-view",
      title: "View Cards",
      focusedIcon: "layers",
      path: "/cards",
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
          <Route path="/" element={<Practice />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/cards" element={<CardsView />} />
        </Routes>
      </View>

      <BottomNavigation
        style={{ flex: 0 }}
        navigationState={{ index, routes }}
        onIndexChange={handleTabPress}
        renderScene={() => {}}
      />
      <Notification />
    </View>
  );
};

export default Main;
