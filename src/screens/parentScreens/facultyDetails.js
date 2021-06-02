import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Icon,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import FacultyInfo from "../../components/FacultyInfo";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const ParentFacultyDetailsScreen = ({ navigation }) => {
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
            FACULTY DETAILS
          </Text>
        </Layout>
        <Layout style={{ width: 350, alignSelf: "center" }}>
          <FacultyInfo
            fname="Sri. Syed Nawaz Pasha"
            phnno="9959054349"
            email="bda@sru.edu.in"
            subject="Big Data Analytics"
          />
          <FacultyInfo
            fname="Sri A. Harshavardhan"
            phnno="9876543210"
            email="dp@sru.edu.in"
            subject="Design Patterns"
          />
          <FacultyInfo
            fname="Mr. Nagendra Babu"
            phnno="9876543210"
            email="dm@sru.edu.in"
            subject="Data Modelling"
          />
          <FacultyInfo
            fname="Ms J.Bhavana"
            phnno="9876543210"
            email="dwdm@sru.edu.in"
            subject="Data Warehousing and Data Mining"
          />
          <FacultyInfo
            fname="Dr. Sanjaya Kumar Panda"
            phnno="9876543210"
            email="gcc@sru.edu.in"
            subject="Grid and Cloud Computing"
          />
          <FacultyInfo
            fname="Sri. D. Ramesh"
            phnno="9848142720"
            email="irs@sru.edu.in"
            subject="Information Retrieval System"
          />
          <FacultyInfo
            fname="Sri K. Ravi Chythanya"
            phnno="9876543210"
            email="mad@sru.edu.in"
            subject="Mobile Application Development"
          />
          <FacultyInfo
            fname="Dr G.Surender"
            phnno="9876543210"
            email="pm@sru.edu.in"
            subject="Project Management"
          />
          <FacultyInfo
            fname="Sri V. Manoj Kumar"
            phnno="9876543210"
            email="spm@sru.edu.in"
            subject="Software Project Management"
          />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
