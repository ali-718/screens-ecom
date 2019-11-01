import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import Login from "./Login";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Shop from "./shop/Shops";
import TabBar from "./Tabbar";

const Stack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    Shop: {
      screen: Shop
    },
    Tabbar: {
      screen: TabBar
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Tabbar"
  }
);

const Main = createAppContainer(Stack);

export default function App() {
  return <Main />;
}
