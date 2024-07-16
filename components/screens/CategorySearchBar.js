import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategorySearchBar = (props) => {
  console.log(props);

  return (
    <View style={styles.pageWrapper}>
      <Text onPress={() => props.navigation.navigate("CategorySearch")}>
        Category Search BAR
      </Text>
    </View>
  );
};

export default CategorySearchBar;

const styles = StyleSheet.create({
  pageWrapper: {
    width: "100px",
    backgroundColor: "red",
  },
});
