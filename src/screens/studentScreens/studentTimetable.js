import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
  Button,
  Layout,
  TopNavigation,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  IndexPath,
  Text,
  Icon,
  MenuItem,
  OverflowMenu,
  TopNavigationAction,
} from "@ui-kitten/components";

import * as WebBrowser from "expo-web-browser";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

const year = ["First", "Second", "Third", "Fourth"];
const sem = ["I", "II"];
const table = ["Classwork", "Exam"];

export const StudentTimetableScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [selectedIndex1, setSelectedIndex1] = React.useState(new IndexPath(0));
  const [selectedIndex2, setSelectedIndex2] = React.useState(new IndexPath(0));

  const displayYear = year[selectedIndex.row];
  const displaySem = sem[selectedIndex1.row];
  const displayTable = table[selectedIndex2];

  const getTT = () => {
    if (displayTable == "Classwork") {
      if (displayYear == "First" && displaySem == "I") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1JgXfDtqOOUdsvy_C9WmimBZ1bOuNVB3_/view?usp=sharing"
        );
      } else if (displayYear == "First" && displaySem == "II") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1go-XVNMM3o2RtcsBEkUegg75TMFOraPa/view?usp=sharing"
        );
      } else if (displayYear == "Second" && displaySem == "I") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1DrUr4gVRi3hA4GCb5FR8NBQxrBIUIOB9/view?usp=sharing"
        );
      } else if (displayYear == "Second" && displaySem == "II") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1-POIbtAUjiIUTvJTex7FEXHqyf4e8Ztx/view?usp=sharing"
        );
      } else if (displayYear == "Third" && displaySem == "I") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/15NwvZVTsMx4DUzCty9UMesdYOsey_l0D/view?usp=sharing"
        );
      } else if (displayYear == "Third" && displaySem == "II") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1G-D6EE-QqOjVD_JkgoaRmrXeB6PDQGZn/view?usp=sharing"
        );
      } else if (displayYear == "Fourth" && displaySem == "I") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1LvZ6htF0c1uSHbs2TvLfeMed8IVoQIrk/view?usp=sharing"
        );
      } else if (displayYear == "Fourth" && displaySem == "II") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1E1LycSzpLmVNzSHIPZb7fW_i2FJz2pcx/view?usp=sharing"
        );
      }
    } else if (displayTable == "Exam") {
      if (displayYear == "First" && displaySem == "I") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1m4cMhkCjr7lsvqsQq_0cGSDdLGdsRukh/view?usp=sharing"
        );
      } else if (displayYear == "First" && displaySem == "II") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1BrSehP5BVtyUQAee0qM5gs8yDyhMMrLk/view?usp=sharing"
        );
      } else if (displayYear == "Second" && displaySem == "I") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1F48yyGyGvSQjTVrqTmpn20Cdpdegm1bM/view?usp=sharing"
        );
      } else if (displayYear == "Second" && displaySem == "II") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1xd75SVqrq9feN1bciHo9u-VUlOslqu-E/view?usp=sharing"
        );
      } else if (displayYear == "Third" && displaySem == "I") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1h-fOBwil8C1fd5OVC8YxJrWfzIXNHi3I/view?usp=sharing"
        );
      } else if (displayYear == "Third" && displaySem == "II") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1zRAC1QyNzsv8y6EUbvRmT9SVCcTQvx6W/view?usp=sharing"
        );
      } else if (displayYear == "Fourth" && displaySem == "I") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1e8f1rSPnXOpTFkc_rGqtE7-wroR6iKT1/view?usp=sharing"
        );
      } else if (displayYear == "Fourth" && displaySem == "II") {
        WebBrowser.openBrowserAsync(
          "https://drive.google.com/file/d/1qYl9DhhBjTNP4TJfExtNthzJWHBFZVGM/view?usp=sharing"
        );
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
          <Text
            style={{
              fontWeight: "bold",
              margin: 25,
              fontSize: 24,
              color: "#FF78EB",
              alignSelf: "center",
            }}
          >
            TIME TABLE
          </Text>
          <Text style={{ alignSelf: "center" }}>
            Select the type of Time Table
          </Text>
        </Layout>
        <Layout style={{ alignItems: "center", margin: 20 }}>
          <RadioGroup
            style={{ flexDirection: "row" }}
            selectedIndex={selectedIndex2}
            onChange={(index) => setSelectedIndex2(index)}
          >
            <Radio>Classwork </Radio>
            <Radio>Exam</Radio>
          </RadioGroup>
        </Layout>
        <Layout
          style={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "center",
          }}
        >
          <Select
            placeholder="Year"
            label="Select year:"
            value={displayYear}
            style={{ width: 150, alignSelf: "center", marginBottom: 20 }}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            <SelectItem title="First" />
            <SelectItem title="Second" />
            <SelectItem title="Third" />
            <SelectItem title="Fourth" />
          </Select>
          <Select
            placeholder="Sem"
            label="Select sem:"
            value={displaySem}
            style={{
              width: 150,
              alignSelf: "center",
              marginBottom: 20,
              marginLeft: 30,
            }}
            selectedIndex={selectedIndex1}
            onSelect={(index) => setSelectedIndex1(index)}
          >
            <SelectItem title="I" />
            <SelectItem title="II" />
          </Select>
        </Layout>
        <Button
          style={{ width: 250, alignSelf: "center", marginTop: 50 }}
          onPress={getTT}
        >
          Fetch Timetable
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
