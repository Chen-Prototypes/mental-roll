import Main from "./src/Main";

import { PaperProvider } from "react-native-paper";
import { NativeRouter } from "react-router-native";


const App = () => {
  return (
    <NativeRouter>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </NativeRouter>
  );
};

export default App;
