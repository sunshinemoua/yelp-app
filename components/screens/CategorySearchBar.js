import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { categorySearchBarOptions } from "../../icons/SVGPaths";
import { Path, Svg } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategorySearchBar = () => {
  const navigation = useNavigation();

  const tabs = categorySearchBarOptions.map((item) => (
    <TouchableOpacity
      key={item.id}
      onPress={() =>
        navigation.navigate("CategorySearch", {
          categoryName: item.title,
        })
      }
      style={styles.iconWrapper}
    >
      <Svg width="28" height="28" style={styles.svgWrapper}>
        <Path d={item.icon} fill="black" />
        {item.additionalIcon && <Path d={item.additionalIcon} fill="grey" />}
      </Svg>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.pageWrapper}>
      <Text>{tabs}</Text>
    </View>
  );
};

export default CategorySearchBar;

const styles = StyleSheet.create({
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  svgWrapper: {
    backgroundColor: "lightgrey",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  pageWrapper: {
    width: "100px",
  },
});
