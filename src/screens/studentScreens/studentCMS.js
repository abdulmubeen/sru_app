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

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const StudentCMSScreen = ({ route, navigation }) => {
  const { name, roll, branch, section } = route.params;

  const student_name = JSON.stringify(name).replace(/\"/g, "");
  const student_roll = JSON.stringify(roll).replace(/\"/g, "");
  const student_branch = JSON.stringify(branch).replace(/\"/g, "");
  const student_section = JSON.stringify(section).replace(/\"/g, "");

  const [classes_attended, setClassesAttended] = React.useState("");
  const [total_classes, setTotalClasses] = React.useState("");

  const dbRef = firebase.database().ref();

  if (student_section == "A") {
    dbRef
      .child("CSEA/" + student_roll)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usrObj = snapshot.val();
          setClassesAttended(usrObj.classesAttended);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (student_section == "B") {
    dbRef
      .child("CSEB/" + student_roll)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usrObj = snapshot.val();
          setClassesAttended(usrObj.classesAttended);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (student_section == "C") {
    dbRef
      .child("CSEC/" + student_roll)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usrObj = snapshot.val();
          setClassesAttended(usrObj.classesAttended);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (student_section == "A") {
    dbRef
      .child("CSEA/totalClassesA")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const clsObj = snapshot.val();
          setTotalClasses(clsObj.value);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (student_section == "B") {
    dbRef
      .child("CSEB/totalClassesB")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const clsObj = snapshot.val();
          setTotalClasses(clsObj.value);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (student_section == "C") {
    dbRef
      .child("CSEC/totalClassesC")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const clsObj = snapshot.val();
          setTotalClasses(clsObj.value);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
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
            accessoryLeft={BackAction}
          />
          <Layout style={{ marginLeft: 40, marginTop: 50, marginBottom: 50 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 24, color: "#FF78EB" }}
            >
              {student_name}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>{student_roll}</Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>{student_branch}</Text>
          </Layout>
          <Layout
            style={{
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Card style={{ width: 350, backgroundColor: "#2d3a5e" }}>
              <Text
                style={{
                  fontSize: 50,
                  color: "#FF78EB",
                  fontWeight: "bold",
                  alignSelf: "center",
                  marginTop: 30,
                }}
              >
                {Math.round((classes_attended / total_classes) * 100)}%
              </Text>
              <Text
                style={{
                  marginBottom: 20,
                  textAlign: "justify",
                  marginTop: 40,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Classes Attended:</Text>{" "}
                {classes_attended}
                {"\n\n"}
                <Text style={{ fontWeight: "bold" }}>Total Classes:</Text>{" "}
                {total_classes}
              </Text>
            </Card>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
