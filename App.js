import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import store from "./redux/store";
import NavOptions from "./components/NavOptions";

export default App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={tw`flex-1`}
        >
          <NavOptions />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
  );
};
