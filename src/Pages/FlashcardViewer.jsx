import { useState, useEffect, useContext } from "react";
import { RealmContext } from "../RealmProvider";

import { View, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const FlashcardViewer = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const realm = useContext(RealmContext);

  useEffect(() => {
    const allFlashcards = realm.objects("Flashcard").slice();
    setFlashcards(allFlashcards);
  }, [realm]);

  const goToNextCard = () => {
    if (currentIndex < flashcards.length - 1) setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };
  const goToPrevCard = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(flashcards.length - 1);
  };

  const start = () => {
    setCurrentIndex(0);
  };

  return (
    <View style={styles.container}>
      {currentIndex == -1 && (
        <Button mode="contained" onPress={start}>
          Roll
        </Button>
      )}

      {flashcards.length > 0 && currentIndex >= 0 && (
        <Card style={styles.card}>
          <Card.Title title="Flashcard" />
          <Card.Content>
            <Title>{flashcards[currentIndex].question}</Title>
            <Paragraph>{flashcards[currentIndex].answer}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={goToPrevCard}>Previous</Button>
            <Button onPress={goToNextCard}>Next</Button>
          </Card.Actions>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  card: {
    marginTop: 16,
  },
});

export default FlashcardViewer;
