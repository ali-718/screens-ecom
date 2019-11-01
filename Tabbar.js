import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  View
} from "native-base";
import Home from "./Home";
import Shop from "./shop/Shops";
import Login from "./Login";

export default class TabBar extends Component {
  state = {
    index: 0
  };

  render() {
    return (
      <Container>
        <Tabs
          onChangeTab={index => this.setState({ index: index.i })}
          tabBarUnderlineStyle={{ opacity: 0 }}
          tabBarBackgroundColor="white"
          tabBarPosition="bottom"
          tabContainerStyle={{ height: 70 }}
        >
          {console.log(this.state)}
          <Tab
            heading={
              <TabHeading
                style={{ backgroundColor: "white" }}
                activeTabStyle={{ backgroundColor: "white" }}
              >
                <View
                  style={{
                    width: "100%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="home"
                    type="FontAwesome"
                    style={{
                      fontSize: 28,
                      color: this.state.index == 0 ? "#3e5a6d" : "black"
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: "black",
                      color: this.state.index == 0 ? "#3e5a6d" : "black"
                    }}
                  >
                    Home
                  </Text>
                </View>
              </TabHeading>
            }
          >
            <Home navigation={() => this.props.navigation} />
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{ backgroundColor: "white" }}
                activeTabStyle={{ backgroundColor: "white" }}
              >
                <View
                  style={{
                    width: "100%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="shopping-bag"
                    type="FontAwesome5"
                    style={{
                      fontSize: 25,
                      color: this.state.index == 1 ? "#3e5a6d" : "black"
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: "black",
                      color: this.state.index == 1 ? "#3e5a6d" : "black"
                    }}
                  >
                    Shops
                  </Text>
                </View>
              </TabHeading>
            }
          >
            <Shop navigation={() => this.props.navigation} />
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{ backgroundColor: "white" }}
                activeTabStyle={{ backgroundColor: "white" }}
              >
                <View
                  style={{
                    width: "100%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="md-grid"
                    style={{
                      fontSize: 28,
                      color: this.state.index == 2 ? "#3e5a6d" : "black"
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: "black",
                      color: this.state.index == 2 ? "#3e5a6d" : "black"
                    }}
                  >
                    Categories
                  </Text>
                </View>
              </TabHeading>
            }
          >
            <Login navigation={() => this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
