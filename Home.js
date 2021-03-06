import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView
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
  Body,
  Button
} from "native-base";

export default class Home extends Component {
  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
            marginTop: StatusBar.currentHeight
          }}
        >
          <TouchableOpacity
            style={{
              width: "20%",
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              style={{ fontSize: 23 }}
              active
              name="bars"
              type="AntDesign"
            />
          </TouchableOpacity>
          <View
            style={{
              width: "50%",
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={{
                uri:
                  "https://images.all-free-download.com/images/graphicthumb/amar_60621.jpg"
              }}
              style={{ width: 80, height: 30 }}
            />
          </View>
          <View
            style={{
              width: "15%",
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#ECEFF2",
                borderRadius: 100,
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                style={{ fontSize: 15 }}
                active
                name="hearto"
                type="AntDesign"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "15%",
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#ECEFF2",
                borderRadius: 100,
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                style={{ fontSize: 15 }}
                active
                name="shoppingcart"
                type="AntDesign"
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ width: "100%", flex: 1 }}>
          <View style={{ width: "100%", marginTop: 10, alignItems: "center" }}>
            <View
              style={{
                height: 40,
                marginTop: 10,
                width: "90%",
                backgroundColor: "white",
                alignSelf: "center",
                borderWidth: 1,
                flexDirection: "row",
                borderRadius: 5,
                elevation: 1,
                alignItems: "center",
                borderColor: "#dfdfdf"
              }}
            >
              <View
                style={{
                  width: 60,
                  borderRightWidth: 1,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "#dfdfdf"
                }}
              >
                <Icon name="search" type="Feather" style={{ fontSize: 18 }} />
              </View>

              <TextInput
                placeholder="search"
                style={{ marginLeft: 10 }}
                placeholderTextColor="#7d7d7d"
              />
            </View>
          </View>

          <View style={{ width: "100%", height: 200, marginTop: 20 }}>
            <Image
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2017/02/25/05/14/shipwreck-2096945_960_720.jpg"
              }}
              style={{ width: "100%", height: 200 }}
            />
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 20,
              borderBottomWidth: 0.7,
              borderStyle: "solid",
              borderColor: "black",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: "90%", flexDirection: "row" }}>
              <View style={{ width: "40%" }}>
                <Text
                  style={{
                    color: "#3e5a6d",
                    fontWeight: "bold",
                    fontSize: 15,
                    borderBottomWidth: 0.7,
                    borderStyle: "solid",
                    borderColor: "#3e5a6d"
                  }}
                >
                  FEATURED SHOPS
                </Text>
              </View>
              <View style={{ width: "60%", alignItems: "flex-end" }}>
                <Text style={{ color: "#a4a4a4", fontSize: 15 }}>
                  View all{" "}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "93%",
              alignSelf: "center",
              flexDirection: "row",
              borderWidth: 0,
              alignItems: "center",
              flex: 1,
              paddingVertical: 10,
              paddingLeft: 2
            }}
          >
            <TouchableOpacity
              style={{
                width: "31%",
                marginRight: 5,
                height: "100%",
                flex: 1,
                alignItems: "center"
              }}
            >
              <View
                style={{
                  height: 100,
                  elevation: 3,
                  borderWidth: 1,
                  borderColor: "#f6f6f6",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("./shop/company2.jpg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#999999",
                      marginVertical: 5,
                      alignSelf: "flex-start"
                    }}
                  >
                    Lorem ipsum
                  </Text>
                </View>
                <View style={{ width: "30%", alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 11,
                      marginVertical: 5,
                      marginRight: 5
                    }}
                  >
                    50$
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View
              style={{
                width: "31%",
                marginRight: 5,
                height: "100%",
                flex: 1,
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  height: 100,
                  elevation: 3,
                  borderWidth: 1,
                  borderColor: "#f6f6f6",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("./shop/company.jpg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#999999",
                      marginVertical: 5,
                      alignSelf: "flex-start"
                    }}
                  >
                    Lorem ipsum
                  </Text>
                </View>
                <View style={{ width: "30%", alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 11,
                      marginVertical: 5,
                      marginRight: 5
                    }}
                  >
                    50$
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "31%",
                marginRight: 5,
                height: "100%",
                flex: 1,
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  height: 100,
                  elevation: 3,
                  borderWidth: 1,
                  borderColor: "#f6f6f6",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("./shop/NationalTrust.png")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#999999",
                      marginVertical: 5,
                      alignSelf: "flex-start"
                    }}
                  >
                    Lorem ipsum
                  </Text>
                </View>
                <View style={{ width: "30%", alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 11,
                      marginVertical: 5,
                      marginRight: 5
                    }}
                  >
                    50$
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "93%",
              alignSelf: "center",
              flexDirection: "row",
              borderWidth: 0,
              alignItems: "center",
              flex: 1,
              paddingVertical: 10,
              paddingLeft: 2
            }}
          >
            <TouchableOpacity
              style={{
                width: "31%",
                marginRight: 5,
                height: "100%",
                flex: 1,
                alignItems: "center"
              }}
            >
              <View
                style={{
                  height: 100,
                  elevation: 3,
                  borderWidth: 1,
                  borderColor: "#f6f6f6",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("./shop/company2.jpg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#999999",
                      marginVertical: 5,
                      alignSelf: "flex-start"
                    }}
                  >
                    Lorem ipsum
                  </Text>
                </View>
                <View style={{ width: "30%", alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 11,
                      marginVertical: 5,
                      marginRight: 5
                    }}
                  >
                    50$
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View
              style={{
                width: "31%",
                marginRight: 5,
                height: "100%",
                flex: 1,
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  height: 100,
                  elevation: 3,
                  borderWidth: 1,
                  borderColor: "#f6f6f6",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("./shop/company.jpg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#999999",
                      marginVertical: 5,
                      alignSelf: "flex-start"
                    }}
                  >
                    Lorem ipsum
                  </Text>
                </View>
                <View style={{ width: "30%", alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 11,
                      marginVertical: 5,
                      marginRight: 5
                    }}
                  >
                    50$
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "31%",
                marginRight: 5,
                height: "100%",
                flex: 1,
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  height: 100,
                  elevation: 3,
                  borderWidth: 1,
                  borderColor: "#f6f6f6",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={require("./shop/NationalTrust.png")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#999999",
                      marginVertical: 5,
                      alignSelf: "flex-start"
                    }}
                  >
                    Lorem ipsum
                  </Text>
                </View>
                <View style={{ width: "30%", alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 11,
                      marginVertical: 5,
                      marginRight: 5
                    }}
                  >
                    50$
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
