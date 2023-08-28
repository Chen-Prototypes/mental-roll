import Main from "./src/Main";
import RealmProvider from "./src/RealmProvider";

import { PaperProvider } from "react-native-paper";
import { NativeRouter } from "react-router-native";

const App = () => {
  return (
    <RealmProvider>
      <NativeRouter>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </NativeRouter>
    </RealmProvider>
  );
};

export default App;
