import React, { createContext, useState } from "react";
import Realm from "realm";

export const FlashcardSchema = {
  name: "Flashcard",
  properties: {
    id: "int",
    question: "string",
    answer: "string",
  },
  primaryKey: "id",
};

const realm = new Realm({ schema: [FlashcardSchema] });
export const RealmContext = createContext();

const RealmProvider = ({ children }) => {
  return (
    <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
  );
};

export default RealmProvider;
