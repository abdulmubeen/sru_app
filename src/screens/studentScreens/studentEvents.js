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
import EventsData from "../../components/EventsData";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const StudentEventsScreen = ({ navigation }) => {
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
            EVENTS
          </Text>
          <Layout style={{ width: 350, alignSelf: "center" }}>
            <EventsData
              title="A 2 Day Workshop on Python"
              date="01-06-2021 and 02-06-2021"
              info="For registration and more information contact 9876543210"
              venue="SRiX Block"
            />
            <EventsData
              title="Logo Designing Competition"
              info="For registration contact your Class Representative"
              date="03-06-2021"
              time="3:00 pm to 4:00 pm"
              venue="Center for Design, III Block"
            />
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
