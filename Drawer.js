import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  TouchableHighlight,
  StatusBar,
  ImageBackground
} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Badge
} from "native-base";

const NavigationOptions = props => (
  <View style={{ width: "100%", flex: 1 }}>
    <View style={{ width: "100%", height: 250 }}>
      <ImageBackground
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2017/05/05/16/11/santa-cruz-2287588_1280.jpg"
        }}
        style={{ width: "100%", height: 250 }}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: "black",
            opacity: 0.7
          }}
        ></View>
        <View
          style={{
            width: "100%",
            position: "absolute",
            flexDirection: "row",
            top: 170,
            left: 10,
            alignItems: "center",
            height: 50
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 100
            }}
            source={{
              uri:
                "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/67153135_2450461055175994_1461370675527680000_n.jpg?_nc_cat=102&_nc_oc=AQnr82fQDEncgU9mNpkDpKpVWTW-xD4nPFEfrY1_GB7wFbma2OcHrF6wSH0Dwb8hfhM&_nc_ht=scontent.fkhi2-1.fna&oh=936f41d6d15e59288d649804f9c241ad&oe=5E4DF3F7"
            }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "300"
            }}
          >
            Mr. Haider
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: "100%", flex: 1, marginTop: 10, alignItems: "center" }}
      >
        <View style={{ width: "90%", height: 50, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon name="home" style={{ color: "#3e5a6d" }} />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ color: "#3e5a6d" }}>Home</Text>
          </View>
        </View>
        <View style={{ width: "90%", height: 50, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="align-left"
              type="Feather"
              style={{ color: "#3e5a6d" }}
            />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ color: "#3e5a6d" }}>Shop by Category</Text>
          </View>
        </View>
        <View style={{ width: "90%", height: 50, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon name="md-contact" style={{ color: "#3e5a6d" }} />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ color: "#3e5a6d" }}>My Account</Text>
          </View>
        </View>
        <View style={{ width: "90%", height: 50, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="person-add"
              type="MaterialIcons"
              style={{ color: "#3e5a6d" }}
            />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ color: "#3e5a6d" }}>Join Ammar as Seller</Text>
          </View>
        </View>
        <View style={{ width: "90%", height: 50, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="phone"
              type="FontAwesome"
              style={{ color: "#3e5a6d" }}
            />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ color: "#3e5a6d" }}>Contact us</Text>
          </View>
        </View>
        <View style={{ width: "90%", height: 50, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="soy-sauce"
              type="MaterialCommunityIcons"
              style={{ color: "#3e5a6d" }}
            />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ color: "#3e5a6d" }}>Arabic</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default NavigationOptions;
