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
  Body
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
          <View
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
          </View>
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
            <Icon
              style={{ fontSize: 20 }}
              active
              name="hearto"
              type="AntDesign"
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
            <Icon
              style={{ fontSize: 20 }}
              active
              name="shoppingcart"
              type="AntDesign"
            />
          </View>
        </View>

        <ScrollView style={{ width: "100%", flex: 1 }}>
          <View style={{ width: "100%", marginTop: 10, alignItems: "center" }}>
            <View
              style={{
                width: "80%",
                borderRadius: 10,
                height: 50,
                backgroundColor: "rgba(220,220,220,0.4)",
                flexDirection: "row",
                justifyContent: "center",
                elevation: 1
              }}
            >
              <View
                style={{
                  width: "10%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "flex-end"
                }}
              >
                <Icon
                  name="search"
                  type="FontAwesome"
                  style={{ fontSize: 20, color: "black" }}
                />
              </View>
              <TextInput
                style={{
                  width: "70%",
                  justifyContent: "center",
                  paddingLeft: 10
                }}
                placeholder="Search"
                placeholderTextColor="rgba(0,0,0,0.7)"
                selectionColor="#42C2BF"
              ></TextInput>
              <View
                style={{
                  width: "20%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    height: 20,
                    borderLeftWidth: 0.6,
                    borderColor: "silver"
                  }}
                >
                  <TouchableOpacity>
                    <Icon
                      name="tune"
                      type="MaterialIcons"
                      style={{ fontSize: 20, marginLeft: 5, color: "silver" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <ScrollView
            horizontal={true}
            style={{ marginLeft: 10, marginTop: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <View>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                activeOpacity={0.8}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_1280.jpg"
                  }}
                  style={{ width: 250, height: 250, alignItems: "flex-start" }}
                >
                  <View style={{ alignItems: "flex-end", width: "99%" }}>
                    <TouchableOpacity>
                      <Icon
                        name="favorite-border"
                        type="MaterialIcons"
                        style={{ fontSize: 20, color: "black" }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      justifyContent: "flex-end",
                      height: "90%",
                      width: 240,
                      alignItems: "flex-start"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "black",
                        fontWeight: "bold",
                        marginLeft: 5
                      }}
                    >
                      Stitch
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "black",
                        marginLeft: 5,
                        marginBottom: 5
                      }}
                    >
                      $88.0
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                activeOpacity={0.8}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://cdn.pixabay.com/photo/2018/01/29/17/01/beautiful-3116587_1280.jpg"
                  }}
                  style={{ width: 250, height: 250, alignItems: "flex-start" }}
                >
                  <View style={{ alignItems: "flex-end", width: "99%" }}>
                    <TouchableOpacity>
                      <Icon
                        name="favorite-border"
                        type="MaterialIcons"
                        style={{ fontSize: 20, color: "black" }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      justifyContent: "flex-end",
                      height: "90%",
                      width: 240,
                      alignItems: "flex-start"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "black",
                        fontWeight: "bold",
                        marginLeft: 5
                      }}
                    >
                      Stitch
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "black",
                        marginLeft: 5,
                        marginBottom: 5
                      }}
                    >
                      $88.0
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                activeOpacity={0.8}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://cdn.pixabay.com/photo/2016/11/29/09/25/beautiful-1868701_1280.jpg"
                  }}
                  style={{ width: 250, height: 250, alignItems: "flex-start" }}
                >
                  <View style={{ alignItems: "flex-end", width: "99%" }}>
                    <TouchableOpacity>
                      <Icon
                        name="favorite-border"
                        type="MaterialIcons"
                        style={{ fontSize: 20, color: "black" }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      justifyContent: "flex-end",
                      height: "90%",
                      width: 240,
                      alignItems: "flex-start"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "black",
                        fontWeight: "bold",
                        marginLeft: 5
                      }}
                    >
                      Stitch
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "black",
                        marginLeft: 5,
                        marginBottom: 5
                      }}
                    >
                      $88.0
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={{ marginTop: 50 }}>
            <View>
              <TouchableOpacity
                style={{ width: "100%", alignItems: "center" }}
                activeOpacity={0.8}
              >
                <Image
                  source={{
                    uri:
                      "https://raw.githubusercontent.com/ali-718/mstore/master/src/Assets/Images/men.jpg"
                  }}
                  style={{ width: "90%", height: 100, borderRadius: 10 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                style={{ width: "100%", alignItems: "center" }}
                activeOpacity={0.8}
              >
                <Image
                  source={{
                    uri:
                      "https://raw.githubusercontent.com/ali-718/mstore/master/src/Assets/Images/men.jpg"
                  }}
                  style={{ width: "90%", height: 100, borderRadius: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 40,
              justifyContent: "center"
            }}
          >
            <View style={{ width: "70%", alignItems: "flex-start" }}>
              <Text style={{ fontSize: 20, color: "black" }}>
                Feature Products
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: "20%",
                alignItems: "flex-end",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "black",
                  justifyContent: "center"
                }}
              >
                Show all
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{ marginLeft: 10, marginTop: 10, alignItems: "center" }}
            >
              <Image
                source={{
                  uri:
                    "https://raw.githubusercontent.com/ali-718/mstore/master/src/Assets/Images/green_shirt.jpg"
                }}
                style={{ width: 150, height: 200 }}
              />
              <View
                style={{ width: 140, marginTop: 5, alignItems: "flex-start" }}
              >
                <Text style={{ color: "black", fontSize: 12 }}>
                  Bermuda Shorts
                </Text>
                <Text style={{ color: "black", fontSize: 10 }}>$35.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, marginTop: 10, alignItems: "center" }}
            >
              <Image
                source={{
                  uri:
                    "https://raw.githubusercontent.com/ali-718/mstore/master/src/Assets/Images/green_shirt.jpg"
                }}
                style={{ width: 150, height: 200 }}
              />
              <View
                style={{ width: 140, marginTop: 5, alignItems: "flex-start" }}
              >
                <Text style={{ color: "black", fontSize: 12 }}>
                  Bermuda Shorts
                </Text>
                <Text style={{ color: "black", fontSize: 10 }}>$35.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center", marginLeft: 10, marginTop: 10 }}
            >
              <Image
                source={{
                  uri:
                    "https://raw.githubusercontent.com/ali-718/mstore/master/src/Assets/Images/green_shirt.jpg"
                }}
                style={{ width: 150, height: 200 }}
              />
              <View
                style={{ width: 140, marginTop: 5, alignItems: "flex-start" }}
              >
                <Text style={{ color: "black", fontSize: 12 }}>
                  Bermuda shorts
                </Text>
                <Text style={{ color: "black", fontSize: 10 }}>$35.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, marginTop: 10, alignItems: "center" }}
            >
              <Image
                source={{
                  uri:
                    "https://raw.githubusercontent.com/ali-718/mstore/master/src/Assets/Images/green_shirt.jpg"
                }}
                style={{ width: 150, height: 200 }}
              />
              <View
                style={{ width: 140, marginTop: 5, alignItems: "flex-start" }}
              >
                <Text style={{ color: "black", fontSize: 12 }}>
                  Bermuda Shorts
                </Text>
                <Text style={{ color: "black", fontSize: 10 }}>$35.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, marginTop: 10, alignItems: "center" }}
            >
              <Image
                source={{
                  uri:
                    "https://raw.githubusercontent.com/ali-718/mstore/master/src/Assets/Images/green_shirt.jpg"
                }}
                style={{ width: 150, height: 200 }}
              />
              <View
                style={{ width: 140, marginTop: 5, alignItems: "flex-start" }}
              >
                <Text style={{ color: "black", fontSize: 12 }}>
                  Bermuda Shorts
                </Text>
                <Text style={{ color: "black", fontSize: 10 }}>$35.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, marginTop: 10, alignItems: "center" }}
            >
              <Image
                source={{
                  uri:
                    "https://raw.githubusercontent.com/ali-718/mstore/master/src/Assets/Images/green_shirt.jpg"
                }}
                style={{ width: 150, height: 200 }}
              />
              <View
                style={{ width: 140, marginTop: 5, alignItems: "flex-start" }}
              >
                <Text style={{ color: "black", fontSize: 12 }}>
                  Bermuda Shorts
                </Text>
                <Text style={{ color: "black", fontSize: 10 }}>$35.00</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
