import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Icon,
  Input,
  Button,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import { showMessage, hideMessage } from "react-native-flash-message";

import firebase from "firebase";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const FacultySearchStudentScreen = ({ navigation }) => {
  const [shno, setShno] = React.useState("");
  const [toggle, setToggle] = React.useState(true);

  const setToggleState = () => {
    setToggle(!toggle);
  };

  const navigateNext = (stuHno) => {
    if (stuHno == "") {
      showMessage({
        message: "Empty Field",
        description: "Student's Hallticket No Field can't be empty",
        type: "danger",
        icon: "danger",
      });
    } else {
      hideMessage();
      const dbRef = firebase.database().ref();
      dbRef
        .child("Students/" + stuHno)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            const stuObj = snapshot.val();
            const stuname = stuObj.name;
            if (toggle) {
              navigation.navigate("Faculty_Student_Search1", {
                sname: stuname,
              });
            }
          } else {
            showMessage({
              message: "Invalid Hall Ticket Number",
              description: "Please check the entered Hall Ticket Number",
              type: "danger",
            });
          }
        });
    }
    setToggle(true);
  };

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
          <Text
            style={{
              fontWeight: "bold",
              margin: 25,
              fontSize: 24,
              color: "#FF78EB",
              alignSelf: "center",
            }}
          >
            GET STUDENT DETAILS
          </Text>
        </Layout>
        <Layout style={{ margin: 20, marginTop: 70 }}>
          <Input
            value={shno}
            placeholder="Enter Student's Hallticket No"
            onChangeText={(nextShno) => setShno(nextShno)}
          />
          <Button
            style={{ width: 200, alignSelf: "center", marginTop: 50 }}
            onPress={() => {
              setToggleState();
              navigateNext(shno);
            }}
          >
            Search Student
          </Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
