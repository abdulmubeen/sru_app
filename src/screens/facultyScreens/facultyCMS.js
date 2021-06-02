import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
  Input,
  Button,
  Layout,
  Text,
  Icon,
  Select,
  SelectItem,
  IndexPath,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import { showMessage } from "react-native-flash-message";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

const cls = ["CSE - A", "CSE - B", "CSE - C"];
const sub = ["DM", "DP", "DWDM", "MAD", "PM", "GCC", "SPM", "IRS", "BDA"];

export const FacultyCMSScreen = ({ route, navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [selectedIndex1, setSelectedIndex1] = React.useState(new IndexPath(0));
  const [displayValue, setDisplayValue] = React.useState("Select");
  const [displayValue1, setDisplayValue1] = React.useState("Select");
  const [periods, setPeriods] = React.useState("");
  const { name, email, branch } = route.params;

  const faculty_name = JSON.stringify(name).replace(/\"/g, "");
  const faculty_email = JSON.stringify(email).replace(/\"/g, "");
  const faculty_branch = JSON.stringify(branch).replace(/\"/g, "");

  const navigateNext = () => {
    if (
      selectedIndex == 0 ||
      selectedIndex1 == 0 ||
      displayValue == "Select" ||
      displayValue1 == "Select" ||
      periods == ""
    ) {
      showMessage({
        message: "Improper Selection",
        description: "Please check your selected values",
        type: "danger",
        icon: "danger",
      });
    } else {
      const faculty_periods = periods;
      const displayClass = cls[selectedIndex.row];
      if (displayClass == "CSE - A") {
        navigation.navigate("Faculty_CMS_1", {
          periods: faculty_periods,
          section: "A",
        });
      } else if (displayClass == "CSE - B") {
        navigation.navigate("Faculty_CMS_1", {
          periods: faculty_periods,
          section: "B",
        });
      } else if (displayClass == "CSE - C") {
        navigation.navigate("Faculty_CMS_1", {
          periods: faculty_periods,
          section: "C",
        });
      }
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
              {faculty_name}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>{faculty_email}</Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>{faculty_branch}</Text>
          </Layout>
          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
            SELECT YOUR CLASS
          </Text>
          <Select
            placeholder="Class"
            style={{
              width: 150,
              alignSelf: "center",
              marginBottom: 20,
              marginTop: 30,
            }}
            value={displayValue}
            selectedIndex={selectedIndex}
            onSelect={(index) => {
              setSelectedIndex(index);
              setDisplayValue(cls[index.row]);
            }}
          >
            <SelectItem title="CSE - A" />
            <SelectItem title="CSE - B" />
            <SelectItem title="CSE - C" />
          </Select>
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", marginTop: 30 }}
          >
            SELECT YOUR SUBJECT
          </Text>
          <Select
            placeholder="Subject"
            value={displayValue1}
            style={{
              width: 150,
              alignSelf: "center",
              marginTop: 30,
            }}
            selectedIndex={selectedIndex1}
            onSelect={(index) => {
              setSelectedIndex1(index);
              setDisplayValue1(sub[index.row]);
            }}
          >
            <SelectItem title="DM" />
            <SelectItem title="DP" />
            <SelectItem title="DWDM" />
            <SelectItem title="MAD" />
            <SelectItem title="PM" />
            <SelectItem title="GCC" />
            <SelectItem title="SPM" />
            <SelectItem title="IRS" />
            <SelectItem title="BDA" />
          </Select>
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", marginTop: 50 }}
          >
            ENTER YOUR PERIODS
          </Text>
          <Input
            style={{ margin: 30, width: 275, alignSelf: "center" }}
            value={periods}
            placeholder="Enter periods with comma"
            onChangeText={(nextVal) => setPeriods(nextVal)}
          />
          <Button
            style={{ width: 175, marginTop: 30, alignSelf: "center" }}
            onPress={navigateNext}
          >
            Proceed
          </Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
