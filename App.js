import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";
import { Icon } from "native-base";
import Logo from "./Capture.png";

export default class App extends React.Component {
  state = {
    modalVisible: false
  };
  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  render() {
    return (
      <View
        style={{ width: "100%", flex: 1, marginTop: StatusBar.currentHeight }}
      >
        <Modal isVisible={this.state.modalVisible}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: "#413F40",
                alignItems: "center",
                borderRadius: 20
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  marginTop: -50
                }}
                source={Logo}
              />
              <Text
                style={{ fontWeight: "bold", color: "white", marginTop: 10 }}
              >
                Daniel
              </Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Icon
                  name="star"
                  type="AntDesign"
                  style={{ fontSize: 16, color: "yellow" }}
                />
                <Text
                  style={{ marginLeft: 5, color: "white", fontWeight: "bold" }}
                >
                  0,01
                </Text>
              </View>
              <View
                style={{
                  width: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  backgroundColor: "#747273",
                  marginTop: 20
                }}
              >
                <Text
                  style={{
                    flexDirection: "row",
                    color: "yellow",
                    fontWeight: "bold"
                  }}
                >
                  Origem
                </Text>
                <Text
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    color: "white",
                    fontWeight: "bold"
                  }}
                >
                  Casa Da Ma Joana
                </Text>
                <Text
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    color: "yellow",
                    fontWeight: "bold"
                  }}
                >
                  Destino
                </Text>
                <Text
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    color: "white",
                    fontWeight: "bold"
                  }}
                >
                  Groelandia
                </Text>
                <Text
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold"
                  }}
                >
                  5 min
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  backgroundColor: "yellow",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  width: "100%"
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 25, color: "black" }}
                >
                  Aceitar corrida
                </Text>
              </View>
              <TouchableOpacity onPress={() => this.toggleModal()}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    marginTop: 10,
                    marginBottom: 20
                  }}
                >
                  Corrida no Dinherio
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Button
          title="click me"
          onPress={() => this.setState({ modalVisible: true })}
        />
      </View>
    );
  }
}
