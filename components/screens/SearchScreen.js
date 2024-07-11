import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { searchOptions } from "../../icons/SVGPaths";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Path, Svg } from "react-native-svg";

const SearchNavOptions = () => {
  const Tab = createBottomTabNavigator();
  const searchTabs = searchOptions.map((item) => (
    <Tab.Screen
      key={item.id}
      name={item.title}
      component={item.componentScreen}
      options={{
        tabBarIcon: () => {
          return (
            <View>
              <Svg width="24" height="24">
                <Path d={item.icon} fill="grey" />
                {item.additionalIcon && (
                  <Path d={item.additionalIcon} fill="grey" />
                )}
              </Svg>
            </View>
          );
        },
      }}
    />
  ));

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {searchTabs}
    </Tab.Navigator>
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
        alignItems: "center",

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
