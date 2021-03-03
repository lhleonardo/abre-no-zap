
import { NavigationContainer } from "@react-navigation/native";
import { Poppins_400Regular, Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { createStackNavigator } from "@react-navigation/stack"

import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { Home } from "./src/pages/Home";
import { Settings } from "./src/pages/Settings";

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium });

  if (!fontLoaded) {
    return <ActivityIndicator />
  }


  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    <StatusBar barStyle="light-content" />
  </NavigationContainer>
}
