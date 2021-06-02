import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Card,
  Icon,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import firebase from "firebase";

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const ParentDashboard = ({ route, navigation }) => {
  const { pname, croll } = route.params;

  const parent_name = JSON.stringify(pname).replace(/\"/g, "");
  const child_roll = JSON.stringify(croll).replace(/\"/g, "");

  const navigateInfo = () => {
    const dbRef = firebase.database().ref();
    dbRef
      .child("Students/" + child_roll)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const childObj = snapshot.val();
          const childName = childObj.name;
          navigation.navigate("Parent_Child_Info", {
            cname: childName,
          });
        }
      });
  };

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={InfoIcon}
          title="About"
          onPress={() => navigation.navigate("About")}
        />
        <MenuItem
          accessoryLeft={LogoutIcon}
          title="Logout"
          onPress={() => navigation.navigate("Login")}
        />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#222B45" />
      <ScrollView style={{ backgroundColor: "#222B45" }}>
        <Layout style={{ flex: 1 }}>
          <TopNavigation
            alignment="center"
            title={(evaProps) => (
              <Text {...evaProps} style={{ fontSize: 18, fontWeight: "bold" }}>
                S R University
              </Text>
            )}
            accessoryRight={renderRightActions}
          />
          <Layout style={{ marginLeft: 40, marginTop: 50, marginBottom: 50 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 24, color: "#FF78EB" }}
            >
              {parent_name}
            </Text>
          </Layout>
          <Layout
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Card
              style={{ width: 125, height: 125, backgroundColor: "#2d3a5e" }}
              onPress={() => navigation.navigate("Parent_Faculty_Info")}
            >
              <Icon
                name="people-outline"
                fill="#FFFFFF"
                style={{
                  width: 32,
                  height: 32,
                  marginBottom: 20,
                  marginTop: 5,
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  alignSelf: "center",
                  textAlign: "center",
                  marginBottom: 10,
                  fontSize: 12,
                }}
              >
                FACULTY {"\n"} INFO
              </Text>
            </Card>
            <Card
              style={{
                width: 125,
                height: 125,
                marginLeft: 50,
                backgroundColor: "#2d3a5e",
              }}
              onPress={() => {
                navigateInfo();
              }}
            >
              <Icon
                name="person-outline"
                fill="#FFFFFF"
                style={{
                  width: 32,
                  height: 32,
                  marginBottom: 20,
                  marginTop: 5,
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  alignSelf: "center",
                  textAlign: "center",
                  fontSize: 12,
                  marginBottom: 10,
                }}
              >
                CHILD {"\n"}INFO
              </Text>
            </Card>
          </Layout>
          <Layout
            style={{
              alignSelf: "center",
              marginTop: 30,
            }}
          >
            <Card
              style={{
                width: 125,
                height: 125,
                backgroundColor: "#2d3a5e",
              }}
              onPress={() => navigation.navigate("Parent_Time_Table_Info")}
            >
              <Icon
                name="layout-outline"
                fill="#FFFFFF"
                style={{
                  width: 32,
                  height: 32,
                  marginBottom: 20,
                  marginTop: 5,
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  alignSelf: "center",
                }}
              >
                TIMETABLE
              </Text>
            </Card>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
