import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
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
import { First_One } from "../../components/notes_list/first_1";
import { First_Two } from "../../components/notes_list/first_2";
import { Second_One } from "../../components/notes_list/second_1";
import { Second_Two } from "../../components/notes_list/second_2";
import { Third_One } from "../../components/notes_list/third_1";
import { Third_Two } from "../../components/notes_list/third_2";
import { Fourth_One } from "../../components/notes_list/fourth_1";
import { Fourth_Two } from "../../components/notes_list/fourth_2";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

const year = ["First", "Second", "Third", "Fourth"];
const sem = ["I", "II"];

export const StudentNotesScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [selectedIndex1, setSelectedIndex1] = React.useState(new IndexPath(0));
  const displayYear = year[selectedIndex.row];
  const displaySem = sem[selectedIndex1.row];

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
      <ScrollView style={{ backgroundColor: "#222B45", maxHeight: 270 }}>
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
            NOTES
          </Text>
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
        </Layout>
      </ScrollView>
      <Layout style={{ flex: 1 }}>
        {(() => {
          if (displayYear == "First" && displaySem == "I") {
            return <First_One />;
          } else if (displayYear == "First" && displaySem == "II") {
            return <First_Two />;
          } else if (displayYear == "Second" && displaySem == "I") {
            return <Second_One />;
          } else if (displayYear == "Second" && displaySem == "II") {
            return <Second_Two />;
          } else if (displayYear == "Third" && displaySem == "I") {
            return <Third_One />;
          } else if (displayYear == "Third" && displaySem == "II") {
            return <Third_Two />;
          } else if (displayYear == "Fourth" && displaySem == "I") {
            return <Fourth_One />;
          } else if (displayYear == "Fourth" && displaySem == "II") {
            return <Fourth_Two />;
          }
        })()}
      </Layout>
    </SafeAreaView>
  );
};
