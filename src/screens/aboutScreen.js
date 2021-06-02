import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
  Avatar,
  Layout,
  Text,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name="close-outline" />;

export const AboutScreen = ({ navigation }) => {
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#222B45" />
      <ScrollView style={{ backgroundColor: "#222B45" }}>
        <Layout style={{ flex: 1 }}>
          <TopNavigation alignment="center" accessoryRight={BackAction} />
          <Text
            style={{
              fontWeight: "bold",
              margin: 25,
              fontSize: 24,
              color: "#FF78EB",
              alignSelf: "center",
            }}
          >
            ABOUT
          </Text>
          <Avatar
            style={{
              width: 250,
              height: 100,
              alignSelf: "center",
              marginBottom: 40,
            }}
            resizeMode="contain"
            source={require("../../assets/sru.png")}
          />
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", fontSize: 25 }}
          >
            Department of
          </Text>
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              marginTop: 20,
              fontSize: 20,
            }}
          >
            Computer Science and Engineering
          </Text>
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", marginTop: 70 }}
          >
            Major Project
          </Text>
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", marginTop: 30 }}
          >
            Developed by <Text style={{ color: "#FF78EB" }}>Batch 31</Text>
          </Text>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
