import { useState, useEffect, useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { RealmContext } from "../RealmProvider";

const CardsView = () => {
  const realm = useContext(RealmContext);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    if (realm) {
      const allFlashcards = realm.objects("Flashcard").slice(); // Assuming your model is named 'Flashcard'
      setFlashcards(allFlashcards);
    }
  }, [realm]);

  const renderCard = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title title="Flashcard" />
      <Card.Content>
        <Title>{item.question}</Title>
        <Paragraph>{item.answer}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flashcards}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default CardsView;
