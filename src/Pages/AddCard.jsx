import { useState, useContext } from "react";
import { RealmContext } from "../RealmProvider";

import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { useDispatch } from "react-redux";
import { notify } from "../Redux/notificationReducer";

const AddCard = () => {
  const dispatch = useDispatch();
  const realm = useContext(RealmContext);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addCard = () => {
    dispatch(notify("Card added", "success"));

    realm.write(() => {
      const lastFlashcard = realm.objects("Flashcard").sorted("id", true)[0];
      const highestId = lastFlashcard ? lastFlashcard.id : 0;

      realm.create("Flashcard", {
        id: highestId + 1,
        question: question,
        answer: answer,
      });
    });

    setQuestion("");
    setAnswer("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Question"
        value={question}
        onChangeText={(text) => setQuestion(text)}
        style={styles.input}
      />
      <TextInput
        label="Answer"
        value={answer}
        onChangeText={(text) => setAnswer(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={addCard}>
        Add Flashcard
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 20,
  },
});

export default AddCard;
