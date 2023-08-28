import { Text, StyleSheet, View } from "react-native";
import { Route, Routes, useNavigate } from "react-router-native";
import Constants from "expo-constants";
import { BottomNavigation } from "react-native-paper";
import { useState } from "react";

import AddCard from "./Pages/AddCard";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

const HomeScreen = () => <Text>Home Screen</Text>; // Placeholder

const Main = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const routes = [
    { key: "home", title: "Home", focusedIcon: "home", path: "/flashcards" },
    { key: "add-card", title: "Add Card", focusedIcon: "plus", path: "/add-card" },
  ];

  const handleTabPress = (newIndex) => {
    setIndex(newIndex);
    navigate(routes[newIndex].path);
  };

  return (
    <View style={styles.container}>
      <Text>Card Caster</Text>
      <View style={styles.contentContainer}>
        <Routes>
          <Route path="/flashcards" element={<HomeScreen />} />
          <Route path="/add-card" element={<AddCard />} />
        </Routes>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={handleTabPress}
          renderScene={({ route, jumpTo }) => {}}
        />
      </View>
    </View>
  );
};

export default Main;
