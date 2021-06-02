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

export const FacultyDashboard = ({ route, navigation }) => {
  const { fname, femail, fbranch, fsubject, fschedule } = route.params;
  const faculty_name = JSON.stringify(fname);
  const faculty_email = JSON.stringify(femail);
  const faculty_branch = JSON.stringify(fbranch);
  const faculty_subject = JSON.stringify(fsubject).replace(/\"/g, "");

  const navigateNext = () => {
    const dbRef = firebase.database().ref();
    dbRef
      .child("Faculty/" + faculty_subject + "/dailySchedule")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const facObj = snapshot.val();
          const fSchedule = facObj.value;
          navigation.navigate("Faculty_Schedule", {
            schedule: fSchedule,
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
              {faculty_name.replace(/\"/g, "")}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>
              {faculty_email.replace(/\"/g, "")}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>
              {faculty_branch.replace(/\"/g, "")}
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
              onPress={() =>
                navigation.navigate("Faculty_CMS", {
                  name: fname,
                  email: femail,
                  branch: fbranch,
                })
              }
            >
              <Icon
                name="pie-chart-outline"
                fill="#FFFFFF"
                style={{
                  width: 32,
                  height: 32,
                  marginBottom: 20,
                  marginTop: 5,
                  alignSelf: "center",
                }}
              />
              <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
                CMS
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
                navigateNext();
              }}
            >
              <Icon
                name="calendar-outline"
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
                }}
              >
                DAILY {"\n"} SCHEDULE
              </Text>
            </Card>
          </Layout>
          <Layout
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 30,
            }}
          >
            <Card
              style={{ width: 125, height: 125, backgroundColor: "#2d3a5e" }}
              onPress={() => navigation.navigate("Faculty_Student_Search")}
            >
              <Icon
                name="search-outline"
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
                }}
              >
                SEARCH {"\n"}STUDENT
              </Text>
            </Card>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
