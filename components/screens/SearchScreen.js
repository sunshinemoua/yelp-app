import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import CategorySearchBar from "./CategorySearchBar";

const SearchScreen = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <CategorySearchBar />
      <Text>SearchScreen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
