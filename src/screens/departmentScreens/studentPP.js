import React from "react";
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Linking,
  Dimensions,
} from "react-native";
import {
  Layout,
  Text,
  Icon,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import { WebView } from "react-native-webview";
const { height, width } = Dimensions.get("window");
import { showMessage } from "react-native-flash-message";

const testURI = "https://cse-batch-31.herokuapp.com";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const DepartmentStudentPredictionScreen = ({ navigation }) => {
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
            STUDENT PLACEMENT PREDICTION
          </Text>
          <WebView
            style={{ height: height, width: width, backgroundColor: "#222B45" }}
            containerStyle={{
              height: height,
              width: width,
              backgroundColor: "#222B45",
            }}
            source={{ uri: testURI }}
            renderError={(error) => (
              <View style={{ flex: 1 }}>
                <Text>{error}</Text>
              </View>
            )}
            onError={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              console.warn("WebView error: ", nativeEvent);
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onLoadStart={() => {
              showMessage({
                message: "Loading Model",
                description: "Please wait for the model to load",
                type: "info",
                icon: "info",
              });
            }}
            onLoad={() => {
              showMessage({
                message: "Model Loaded",
                description:
                  "Please enter values to predict the placement percentage",
                type: "success",
                icon: "success",
              });
            }}
            onNavigatorStateChange={(event) => {
              if (event.url !== testURI) {
                this.webview.stopLoading();
                Linking.openURL(event.url);
              }
            }}
          />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
