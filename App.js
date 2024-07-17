import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import store from "./redux/store";
import BottomNavigation from "./components/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import CategorySearch from "./components/screens/CategorySearch";
import SearchScreen from "./components/screens/SearchScreen";

const Home = () => {
  const Tab = createBottomTabNavigator();
  return <BottomNavigation />;
};

const Index = () => {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={tw`flex-1`}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="CategorySearch" component={CategorySearch} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};
