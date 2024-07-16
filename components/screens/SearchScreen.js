import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { searchOptions } from "../../icons/SVGPaths";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Path, Svg } from "react-native-svg";
import CategorySearch from "./CategorySearch";
import { createStackNavigator } from "@react-navigation/stack";
import CategorySearchBar from "./CategorySearchBar";

const SearchNavOptions = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="CategorySearchBar"
          // options={{
          //   headerShown: false,
          // }}
        >
          {(props) => <CategorySearchBar {...props} prop1={"hello"} />}
        </Stack.Screen>
        <Stack.Screen name="CategorySearch" component={CategorySearch} />
      </Stack.Navigator>
    </>
  );
};

const SearchScreen = () => {
  // For more accurate safe area depending on screen size
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",

        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <SearchNavOptions />
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
