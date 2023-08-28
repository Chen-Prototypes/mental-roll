import { useState, useEffect, useContext } from "react";
import { RealmContext } from "../RealmProvider";
import _ from "lodash";

import { View, StyleSheet, Text } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

import { useDispatch } from "react-redux";
import { notify } from "../Redux/notificationReducer";

const FlashcardViewer = () => {
  const dispatch = useDispatch();
  const realm = useContext(RealmContext);

  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [roll, setRoll] = useState(0);

  useEffect(() => {
    const allFlashcards = realm.objects("Flashcard").slice();
    setFlashcards(_.shuffle(allFlashcards));
  }, [realm]);

  const goToNextCard = () => {
    setRevealAnswer(false);
    if (currentIndex + 1 < roll) setCurrentIndex(currentIndex + 1);
    else {
      setCurrentIndex(-1)
      useDispatch(notify("Good Job!"));
    };
  };

  const start = () => {
    const rolledNumber = Math.floor(Math.random() * flashcards.length) + 1;
    setRoll(rolledNumber);
    dispatch(notify(`Rolling ${rolledNumber} flashcards`));
    setCurrentIndex(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.rollCount}>
        {roll > 0 && currentIndex >= 0 ? `${currentIndex + 1}/${roll}` : ""}
      </Text>

      {currentIndex === -1 && (
        <Button mode="contained" onPress={start}>
          Roll
        </Button>
      )}

      {flashcards.length > 0 && currentIndex >= 0 && (
        <Card style={styles.card}>
          <Card.Title title="Flashcard" />
          <Card.Content>
            <Title>{flashcards[currentIndex].question}</Title>
            {revealAnswer && (
              <Paragraph>{flashcards[currentIndex].answer}</Paragraph>
            )}
          </Card.Content>
          <Card.Actions>
            {!revealAnswer ? (
              <Button onPress={() => setRevealAnswer(true)}>Reveal</Button>
            ) : (
              <Button onPress={goToNextCard}>Next</Button>
            )}
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
  rollCount: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default FlashcardViewer;
