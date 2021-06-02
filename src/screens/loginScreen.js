import React, { useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Button,
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Avatar,
  Input,
  Icon,
} from "@ui-kitten/components";
import { showMessage } from "react-native-flash-message";

import NetInfo from "@react-native-community/netinfo";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0JxyFFCKbhPzqFFs7YhSJbUr4PbfyvRs",
  authDomain: "sru-app-eab34.firebaseapp.com",
  projectId: "sru-app-eab34",
  storageBucket: "sru-app-eab34.appspot.com",
  messagingSenderId: "580808238794",
  appId: "1:580808238794:web:4d86978de6dc5bc03df633",
  measurementId: "G-K64NN3E4SY",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const data = ["Student", "Faculty", "Parent", "Department"];

export const LoginScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];

  const [uname, setUname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [toggle, setToggle] = React.useState(true);

  const chkInternet = () => {
    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        if (state.isConnected == false || state.isInternetReachable == false) {
          showMessage({
            message: "No Internet Access",
            description: "Please check your Internet Connection",
            type: "danger",
            icon: "danger",
          });
        }
      });

      return () => {
        unsubscribe();
      };
    }, []);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const setToggleState = () => {
    setToggle(!toggle);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const navigateDetails = (usr_name, usr_pwd) => {
    if (usr_name == "" && usr_pwd == "") {
      showMessage({
        message: "Invalid Credentials",
        description: "Username and Password Fields can't be empty",
        type: "danger",
        icon: "danger",
      });
    } else {
      if (displayValue == "Student") {
        const dbRef = firebase.database().ref();
        dbRef
          .child("Students/" + usr_name)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              const usrObj = snapshot.val();
              const uname = usrObj.name;
              const upwd = usrObj.password;
              const roll_no = usrObj.rollno;
              const ubranch = usrObj.branch;
              const usection = usrObj.section;
              if (upwd == usr_pwd && toggle == true) {
                showMessage({
                  message: "Login Success",
                  type: "success",
                  icon: "success",
                });
                setUname("");
                setPassword("");
                navigation.navigate("Student_Dash", {
                  sname: uname,
                  sroll: roll_no,
                  sbranch: ubranch,
                  ssection: usection,
                });
              } else if (upwd != usr_pwd) {
                showMessage({
                  message: "Invalid Credentials",
                  description: "Please check your Username or Password",
                  type: "danger",
                  icon: "danger",
                });
              }
            } else {
              showMessage({
                message: "Invalid Credentials",
                description: "Please check your Username or Password",
                type: "danger",
                icon: "danger",
              });
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (displayValue == "Faculty") {
        const dbRef = firebase.database().ref();
        dbRef
          .child("Faculty/" + usr_name)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              const usrObj = snapshot.val();
              const uname = usrObj.name;
              const upwd = usrObj.password;
              const uemail = usrObj.email;
              const ubranch = usrObj.department;
              const usubject = usrObj.subject;
              const uschedule = usrObj.dailySchedule;
              if (upwd == usr_pwd && toggle == true) {
                showMessage({
                  message: "Login Success",
                  type: "success",
                  icon: "success",
                });
                setUname("");
                setPassword("");
                navigation.navigate("Faculty_Dash", {
                  fname: uname,
                  femail: uemail,
                  fbranch: ubranch,
                  fsubject: usubject,
                  fschedule: uschedule,
                });
              } else if (upwd != usr_pwd) {
                showMessage({
                  message: "Invalid Credentials",
                  description: "Please check your Username or Password",
                  type: "danger",
                  icon: "danger",
                });
              }
            } else {
              showMessage({
                message: "Invalid Credentials",
                description: "Please check your Username or Password",
                type: "danger",
                icon: "danger",
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (displayValue == "Parent") {
        const dbRef = firebase.database().ref();
        dbRef
          .child("Parent/" + usr_name)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              const usrObj = snapshot.val();
              const uname = usrObj.name;
              const upwd = usrObj.password;
              const uroll = usrObj.child_rollno;
              console.log(toggle);
              if (upwd == usr_pwd && toggle == true) {
                showMessage({
                  message: "Login Success",
                  type: "success",
                  icon: "success",
                });
                setUname("");
                setPassword("");
                navigation.navigate("Parent_Dash", {
                  pname: uname,
                  croll: uroll,
                });
              } else if (upwd != usr_pwd) {
                showMessage({
                  message: "Invalid Credentials",
                  description: "Please check your Username or Password",
                  type: "danger",
                  icon: "danger",
                });
              }
            } else {
              showMessage({
                message: "Invalid Credentials",
                description: "Please check your Username or Password",
                type: "danger",
                icon: "danger",
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (displayValue == "Department") {
        const dbRef = firebase.database().ref();
        dbRef
          .child("Department/" + usr_name)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              const usrObj = snapshot.val();
              const uname = usrObj.name;
              const upwd = usrObj.password;
              if (upwd == usr_pwd && toggle == true) {
                showMessage({
                  message: "Login Success",
                  type: "success",
                  icon: "success",
                });
                setUname("");
                setPassword("");
                navigation.navigate("Department_Dash", {
                  dname: uname,
                });
              } else if (upwd != usr_pwd) {
                showMessage({
                  message: "Invalid Credentials",
                  description: "Please check your Username or Password",
                  type: "danger",
                  icon: "danger",
                });
              }
            } else {
              showMessage({
                message: "Invalid Credentials",
                description: "Please check your Username or Password",
                type: "danger",
                icon: "danger",
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
    setToggle(true);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#222B45",
      }}
    >
      <StatusBar backgroundColor="#222B45" />
      <Layout style={{ flex: 1, justifyContent: "center" }}>
        {chkInternet()}
        <Avatar
          style={{
            width: 250,
            height: 100,
            alignSelf: "center",
            marginBottom: 40,
          }}
          resizeMode="contain"
          source={require("../assets/sru.png")}
        />
        <Select
          placeholder="Student"
          label="Login as:"
          value={displayValue}
          style={{ width: 200, alignSelf: "center", marginBottom: 20 }}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <SelectItem title="Student" />
          <SelectItem title="Faculty" />
          <SelectItem title="Parent" />
          <SelectItem title="Department" />
        </Select>
        <Layout style={{ margin: 30 }}>
          <Input
            value={uname}
            label="Username"
            placeholder="Enter your Username"
            onChangeText={(nextUname) => setUname(nextUname)}
          />
          <Input
            value={password}
            label="Password"
            placeholder="Enter your Password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={(nextPassword) => setPassword(nextPassword)}
            style={{ marginTop: 20 }}
          />
        </Layout>
        <Button
          style={{ width: 150, height: 50, marginTop: 30, alignSelf: "center" }}
          onPress={() => {
            setToggleState();
            showMessage({
              message: "Signing In",
              description: "Please Wait",
              type: "info",
              icon: "info",
            });
            navigateDetails(uname, password);
          }}
        >
          LOGIN
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
