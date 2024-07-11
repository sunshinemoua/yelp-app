import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { paths } from "../../icons/SVGPaths";
import { Path, Svg } from "react-native-svg";
import NavOptions from "../NavOptions";

const Home = () => {
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <View>
        <Text>Home</Text>
        <Svg width="24" height="24">
          {/* <Path d={paths.projects} fill="black" stroke="black" /> */}
          {/* <Path d={paths.testing} fill="none" stroke="black" /> */}
        </Svg>
      </View>
      {/* <NavOptions /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // height: "100vh",
    backgroundColor: "green",
  },
});
