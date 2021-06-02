import React from "react";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";
import {
  Modal,
  Card,
  Button,
  Layout,
  Input,
  Text,
  Icon,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import firebase from "firebase";

import { showMessage } from "react-native-flash-message";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const FacultyCMSIScreen = ({ route, navigation }) => {
  const { periods, section } = route.params;

  const selectedSection = JSON.stringify(section).replace(/\"/g, "");
  const enteredPeriods = periods;

  const [data, setData] = React.useState("");

  const [visible, setVisible] = React.useState(false);
  const [series1, setSeries1] = React.useState("");
  const [series2, setSeries2] = React.useState("");
  const [series3, setSeries3] = React.useState("");
  const [selectedStudents, setSelectedStudents] = React.useState([]);

  const [topic, setTopic] = React.useState("");

  const setStudents = (rollno) => {
    setSelectedStudents((selectedStudents) => [...selectedStudents, rollno]);
  };

  const setStudentsroll = () => {
    const myarray = [];
    if (series1 != "") {
      var tmpArray = series1.split(",");
      for (var i = 0; i < tmpArray.length; i++) {
        var temp = "16K41A05";
        var temp1 = temp.concat(tmpArray[i]);
        myarray.push(temp1);
        setStudents(temp1);
      }
    }
    if (series2 != "") {
      var tmpArray = series2.split(",");
      for (var i = 0; i < tmpArray.length; i++) {
        var temp = "17K41A05";
        var temp1 = temp.concat(tmpArray[i]);
        myarray.push(temp1);
        setStudents(temp1);
      }
    }
    if (series3 != "") {
      var tmpArray = series3.split(",");
      for (var i = 0; i < tmpArray.length; i++) {
        var temp = "18K45A05";
        var temp1 = temp.concat(tmpArray[i]);
        myarray.push(temp1);
        setStudents(temp1);
      }
    }
    setData(myarray.join("\n"));
    setVisible(true);
  };

  const markAttendance = () => {
    if (selectedStudents != "") {
      if (selectedSection == "A") {
        const dbRef = firebase.database().ref("CSEA");

        for (var i = 0; i < selectedStudents.length; i++) {
          const student = selectedStudents[i];
          dbRef
            .child(student)
            .get()
            .then((snapshot) => {
              if (snapshot.exists()) {
                const urObj = snapshot.val();
                const cls = urObj.classesAttended;
                const clss = cls + 1;
                dbRef.child(student).update({ classesAttended: clss });
              } else {
                showMessage({
                  message: "Incorrect Roll No",
                  description: "You have entered an incorrect Roll No",
                  type: "danger",
                  icon: "danger",
                });
              }
            });
        }

        dbRef
          .child("totalClassesA/value")
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              const usrTotal = snapshot.val();
              const newTotal = usrTotal + 1;
              dbRef.child("totalClassesA").update({ value: newTotal });
            }
          });

        showMessage({
          message: "Attendance Marked",
          description: "The database was updated successfully",
          type: "success",
          icon: "success",
        });
        setSeries1("");
        setSeries2("");
        setSeries3("");
        setTopic("");
      } else if (selectedSection == "B") {
        const dbRef = firebase.database().ref("CSEB");

        for (var i = 0; i < selectedStudents.length; i++) {
          console.log(selectedStudents[i]);
          const student = selectedStudents[i];
          dbRef
            .child(student)
            .get()
            .then((snapshot) => {
              if (snapshot.exists()) {
                const urObj = snapshot.val();
                const cls = urObj.classesAttended;
                const clss = cls + 1;
                console.log(clss);
                dbRef.child(student).update({ classesAttended: clss });
              } else {
                showMessage({
                  message: "Incorrect Roll No",
                  description: "You have entered an incorrect Roll No",
                  type: "danger",
                  icon: "danger",
                });
              }
            });
        }

        dbRef
          .child("totalClassesB/value")
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              const usrTotal = snapshot.val();
              const newTotal = usrTotal + 1;
              console.log(newTotal);
              dbRef.child("totalClassesB").update({ value: newTotal });
            }
          });
        showMessage({
          message: "Attendance Marked",
          description: "The database was updated successfully",
          type: "success",
          icon: "success",
        });
        setSeries1("");
        setSeries2("");
        setSeries3("");
        setTopic("");
      } else if (selectedSection == "C") {
        const dbRef = firebase.database().ref("CSEC");

        for (var i = 0; i < selectedStudents.length; i++) {
          console.log(selectedStudents[i]);
          const student = selectedStudents[i];
          dbRef
            .child(student)
            .get()
            .then((snapshot) => {
              if (snapshot.exists()) {
                const urObj = snapshot.val();
                const cls = urObj.classesAttended;
                const clss = cls + 1;
                console.log(clss);
                dbRef.child(student).update({ classesAttended: clss });
              } else {
                showMessage({
                  message: "Incorrect Roll No",
                  description: "You have entered an incorrect Roll No",
                  type: "danger",
                  icon: "danger",
                });
              }
            });
        }

        dbRef
          .child("totalClassesC/value")
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              const usrTotal = snapshot.val();
              const newTotal = usrTotal + 1;
              console.log(newTotal);
              dbRef.child("totalClassesC").update({ value: newTotal });
            }
          });
        showMessage({
          message: "Attendance Marked",
          description: "The database was updated successfully",
          type: "success",
          icon: "success",
        });
        setSeries1("");
        setSeries2("");
        setSeries3("");
        setTopic("");
      }
    } else {
      showMessage({
        message: "No students set",
        description: "Set students first to continue",
        type: "danger",
        icon: "danger",
      });
    }
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#222B45" }}>
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
        </Layout>
        <Input
          value={topic}
          label="Topic Name"
          placeholder="Enter the Topic Discussed"
          onChangeText={(nextTopic) => setTopic(nextTopic)}
          style={{ margin: 30 }}
        />
        <Text style={{ fontWeight: "bold", marginLeft: 30 }}>
          Mark the Attendance for Periods {enteredPeriods}
        </Text>
        <Input
          value={series1}
          label="16K series Students"
          placeholder="Enter Student H.No's"
          caption="Leave this field empty if none"
          onChangeText={(nxtVal) => setSeries1(nxtVal)}
          style={{ width: 300, alignSelf: "center", marginTop: 30 }}
        />
        <Input
          value={series2}
          label="17K series Students"
          placeholder="Enter Student H.No's"
          caption="Leave this field empty if none"
          onChangeText={(nxtVal1) => setSeries2(nxtVal1)}
          style={{ width: 300, alignSelf: "center", marginTop: 30 }}
        />
        <Input
          value={series3}
          label="18K series Students"
          placeholder="Enter Student H.No's"
          caption="Leave this field empty if none"
          onChangeText={(nxtVal2) => setSeries3(nxtVal2)}
          style={{ width: 300, alignSelf: "center", marginTop: 30 }}
        />
        <Button
          style={{ width: 250, alignSelf: "center", marginTop: 30 }}
          onPress={setStudentsroll}
        >
          Set Students
        </Button>
        <Button
          style={{ width: 250, alignSelf: "center", marginTop: 25 }}
          onPress={markAttendance}
        >
          Submit
        </Button>
        <Modal visible={visible} backdropStyle={styles.backdrop}>
          <Card disabled={true}>
            <Text>You have selected the following Students {"\n"}</Text>
            <Text>{data}</Text>
            <Text>{"\n"}Do you want to continue?</Text>
            <Layout
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Button
                onPress={() => {
                  setVisible(false);
                  showMessage({
                    message: "Students Set",
                    description:
                      "Click on submit button to mark the attendance",
                    type: "success",
                    icon: "success",
                  });
                }}
              >
                Yes
              </Button>
              <Button
                onPress={() => {
                  setSelectedStudents("");
                  showMessage({
                    message: "No students set",
                    description: "Click on set students again to continue",
                    type: "danger",
                    icon: "danger",
                  });
                  setVisible(false);
                }}
              >
                No
              </Button>
            </Layout>
          </Card>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
