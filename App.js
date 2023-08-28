import Main from "./src/Main";
import RealmProvider from "./src/RealmProvider";

import { PaperProvider } from "react-native-paper";
import { NativeRouter } from "react-router-native";

import { Provider } from "react-redux";
import store from "./src/Redux/store";

const App = () => {
  return (
    <RealmProvider>
      <NativeRouter>
        <PaperProvider>
          <Provider store={store}>
            <Main />
          </Provider>
        </PaperProvider>
      </NativeRouter>
    </RealmProvider>
  );
};

export default App;
