import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import Login from "./Login";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./Home";
import Shop from "./shop/Shops";
import TabBar from "./Tabbar";
import NavigationOptions from "./Drawer";

const Stack = createDrawerNavigator(
  {
    Tabbar: {
      screen: TabBar
    },
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    Shop: {
      screen: Shop
    }
  },
  {
    contentComponent: NavigationOptions
  }
);

const Main = createAppContainer(Stack);

export default function App() {
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <StatusBar backgroundColor="#3e5a6d" />
      <Main />
    </View>
  );
}
