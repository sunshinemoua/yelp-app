import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import HomeScreen from "./components/screens/HomeScreen";
import tw from "tailwind-react-native-classnames";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import NavOptions from "./components/NavOptions";

export default App = () => {
  const Stack = createStackNavigator();
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
