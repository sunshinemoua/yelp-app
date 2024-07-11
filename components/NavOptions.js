import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { paths } from "../icons/SVGPaths";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const NavOptions = () => {
  const Tab = createBottomTabNavigator();
  const tabs = paths.map((item) => (
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
    <NavigationContainer>
      <Tab.Navigator>{tabs}</Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavOptions;
