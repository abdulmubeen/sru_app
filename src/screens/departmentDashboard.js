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

export const DepartmentDashboard = ({ route, navigation }) => {
  const { dname } = route.params;
  const dept_name = JSON.stringify(dname).replace(/\"/g, "");

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
              {dept_name}
            </Text>
          </Layout>
          <Layout
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 30,
            }}
          >
            <Card
              style={{ width: 130, height: 130, backgroundColor: "#2d3a5e" }}
              onPress={() => navigation.navigate("Department_Set_Schedule")}
            >
              <Icon
                name="edit-outline"
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
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                SET FACULTY {"\n"} SCHEDULE
              </Text>
            </Card>
            <Card
              style={{
                width: 130,
                height: 130,
                marginLeft: 50,
                backgroundColor: "#2d3a5e",
              }}
              onPress={() =>
                navigation.navigate("Department_Student_Prediction")
              }
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
                PLACEMENT {"\n"} PREDICTON
              </Text>
            </Card>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
