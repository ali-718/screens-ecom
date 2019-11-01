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
  render() {
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={{ opacity: 0 }}
          tabBarBackgroundColor="white"
          tabBarPosition="bottom"
        >
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
                    name="camera"
                    style={{ fontSize: 15, color: "black" }}
                  />
                  <Text style={{ fontSize: 12, color: "black" }}>Camera</Text>
                </View>
              </TabHeading>
            }
          >
            <Home />
          </Tab>
          <Tab heading="Tab2">
            <Shop />
          </Tab>
          <Tab heading="Tab3">
            <Login />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
