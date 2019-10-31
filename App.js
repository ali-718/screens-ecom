import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import Login from "./Login";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";

const Stack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

const Main = createAppContainer(Stack);

export default function App() {
  return <Main />;
}
