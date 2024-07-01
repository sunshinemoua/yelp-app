import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
// import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { Path, Svg } from "react-native-svg";
import { paths } from "../icons/SVGPaths";
import tw from "tailwind-react-native-classnames";

const NavOptions = () => {
  const navigation = useNavigation();
  const { origin } = useSelector((state) => state.nav);

  return (
    <FlatList
      className={tw`flex flex-row items-center justify-center`}
      data={paths}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <Pressable
          onPress={() => console.log("clicked")}
          style={tw`flex flex-col items-center justify-center`}
        >
          <Svg width="24" height="24">
            <Path d={item.icon} fill="black" />
            {item.secondIcon && <Path d={item.secondIcon} fill="black" />}
          </Svg>
          <Text style={{ fontSize: 10, marginTop: 2 }}>{item.title}</Text>
        </Pressable>
      )}
    />
  );
};

export default NavOptions;
