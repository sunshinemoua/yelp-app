import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategorySearch = (props) => {
  console.log(props);
  const { categoryName } = props.route.params;
  return (
    <View>
      <Text>CategorySearch PAGE {categoryName} </Text>
    </View>
  );
};

export default CategorySearch;

const styles = StyleSheet.create({});
