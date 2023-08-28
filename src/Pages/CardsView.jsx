import { useState, useEffect, useContext } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { RealmContext } from "../RealmProvider";

const CardsView = () => {
  const realm = useContext(RealmContext);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    loadData();
  }, [realm]);

  const loadData = () => {
    if (realm) {
      const allFlashcards = realm.objects("Flashcard").slice();
      setFlashcards(allFlashcards);
    }
  };

  const deleteCard = (id) => {
    Alert.alert(
      "Delete Flashcard",
      "Are you sure you want to delete this flashcard?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () => {
            realm.write(() => {
              const cardToDelete = realm.objectForPrimaryKey("Flashcard", id);
              realm.delete(cardToDelete);
            });
            loadData();
          },
        },
      ]
    );
  };

  const renderCard = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title title="Flashcard" />
      <Card.Content>
        <Title>{item.question}</Title>
        <Paragraph>{item.answer}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => deleteCard(item.id)}>Delete</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flashcards}
        renderItem={renderCard}
        keyExtractor={(item, index) => item.id.toString()}
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
