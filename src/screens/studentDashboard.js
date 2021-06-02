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

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const StudentDashboard = ({ route, navigation }) => {
  const { sname, sroll, sbranch, ssection } = route.params;

  const student_name = JSON.stringify(sname);
  const student_roll = JSON.stringify(sroll);
  const student_branch = JSON.stringify(sbranch);

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
              {student_name.replace(/\"/g, "")}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>
              {student_roll.replace(/\"/g, "")}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>
              {student_branch.replace(/\"/g, "")}
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
                navigation.navigate("Student_CMS", {
                  name: sname,
                  roll: sroll,
                  branch: sbranch,
                  section: ssection,
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
              onPress={() => navigation.navigate("Student_Notes")}
            >
              <Icon
                name="file-text-outline"
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
                NOTES
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
              onPress={() => navigation.navigate("Student_Events")}
            >
              <Icon
                name="star-outline"
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
                EVENTS
              </Text>
            </Card>
            <Card
              style={{
                width: 125,
                height: 125,
                marginLeft: 50,
                backgroundColor: "#2d3a5e",
              }}
              onPress={() => navigation.navigate("Student_Prediction")}
            >
              <Icon
                name="trending-up-outline"
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
                  textAlign: "center",
                }}
              >
                PLACEMENT {"\n"} PREDICTION
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
              onPress={() => navigation.navigate("Student_TimeTable")}
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
