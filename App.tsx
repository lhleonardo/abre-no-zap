
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack"

import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/pages/Home";
import { Settings } from "./src/pages/Settings";

const Stack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    <StatusBar barStyle="light-content" />
  </NavigationContainer>
}
