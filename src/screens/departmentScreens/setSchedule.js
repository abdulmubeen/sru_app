import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Icon,
  Button,
  Input,
  IndexPath,
  Select,
  SelectItem,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { showMessage, hideMessage } from "react-native-flash-message";

import firebase from "firebase";

const data = ["DM", "DP", "DWDM", "MAD", "PM", "GCC", "SPM", "IRS", "BDA"];

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const DepartmentSetScheduleScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [displayValue, setDisplayValue] = React.useState("Select");

  const [value, setValue] = React.useState("");

  const setSchedule = () => {
    const displayValue = data[selectedIndex.row];
    const dbRef = firebase.database().ref();
    if (displayValue.length != "Select" && value.length != 0) {
      const displayValue = data[selectedIndex.row];
      hideMessage();
      dbRef
        .child("Faculty/" + displayValue)
        .update({ dailySchedule: { value } })
        .then(() => {
          showMessage({
            message: "Schedule Updated",
            description: "Schedule updated successfully",
            type: "success",
            icon: "success",
          });
          setValue("");
          setDisplayValue("Select");
        });
    } else {
      showMessage({
        message: "Empty Field",
        description: "Schedule can't be empty",
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
            SET SCHEDULE
          </Text>
        </Layout>
        <Select
          placeholder="Faculty"
          label="Select Faculty Member:"
          value={displayValue}
          style={{
            width: 200,
            alignSelf: "center",
            marginBottom: 70,
            marginTop: 20,
          }}
          selectedIndex={selectedIndex}
          onSelect={(index) => {
            setSelectedIndex(index);
            setDisplayValue(data[index.row]);
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
        <Input
          label="Enter Schedule"
          value={value}
          multiline={true}
          textStyle={{ minHeight: 64 }}
          placeholder="Enter Schedule Here"
          onChangeText={(nxtValue) => setValue(nxtValue)}
          style={{ margin: 25 }}
        />
        <Button
          style={{ width: 200, alignSelf: "center", marginTop: 20 }}
          onPress={setSchedule}
        >
          Set Schedule
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
