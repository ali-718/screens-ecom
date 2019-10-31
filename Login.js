import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Icon,
  CheckBox,
  ListItem,
  Body
} from "native-base";

export default class Login extends Component {
  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <ImageBackground
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2015/11/07/11/17/golden-gate-bridge-1030999_960_720.jpg"
          }}
          style={{ width: "100%", height: 250 }}
        ></ImageBackground>
        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            marginTop: -50,
            alignSelf: "center",
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            borderRadius: 10,
            paddingTop: 30,
            paddingBottom: 30,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Item
            style={{
              width: "90%",
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10
            }}
            regular
          >
            <Input style={{ fontSize: 15 }} placeholder="Email" />
            <Icon
              style={{ fontSize: 15 }}
              active
              name="email-outline"
              type="MaterialCommunityIcons"
            />
          </Item>
          <Item
            style={{
              width: "90%",
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 20
            }}
            regular
          >
            <Input style={{ fontSize: 15 }} placeholder="Password" />
            <Icon style={{ fontSize: 15 }} active name="ios-key" />
          </Item>

          <View style={{ width: "90%", flexDirection: "row", marginTop: 10 }}>
            <View style={{ width: "50%", flexDirection: "row" }}>
              <CheckBox checked={true} />
              <Text style={{ marginLeft: 15, fontSize: 13 }}>Remember me</Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Text style={{ fontSize: 13 }}>Forgot password ?</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: -20 }}>
          <TouchableOpacity
            style={{
              width: "70%",
              alignSelf: "center",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              backgroundColor: "tomato",
              backfaceVisibility: "visible"
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
