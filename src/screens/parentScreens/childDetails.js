import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Button,
  Icon,
  Card,
  Modal,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import ChildDetails from "../../components/ChildDetails";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export const ParentChildDetailsScreen = ({ route, navigation }) => {
  const { cname } = route.params;
  const child_name = JSON.stringify(cname).replace(/\"/g, "");

  const [sem1, setSem1] = React.useState(false);
  const [sem2, setSem2] = React.useState(false);
  const [sem3, setSem3] = React.useState(false);
  const [sem4, setSem4] = React.useState(false);
  const [sem5, setSem5] = React.useState(false);
  const [sem6, setSem6] = React.useState(false);
  const [sem7, setSem7] = React.useState(false);
  const [sem8, setSem8] = React.useState(false);

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
            CHILD DETAILS
          </Text>
        </Layout>
        <Layout style={{ width: 350, alignSelf: "center" }}>
          <ChildDetails
            sname={child_name}
            fname="Father's Name"
            mname="Mother's Name"
            pcontact="9876543210"
            attendpercentage="75 %"
          />
        </Layout>
        <Layout style={{ margin: 25 }}>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Button onPress={() => setSem1(true)}>SEM-I</Button>
            <Button onPress={() => setSem2(true)}>SEM-II</Button>
            <Button onPress={() => setSem3(true)}>SEM-III</Button>
          </Layout>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Button onPress={() => setSem4(true)}>SEM-IV</Button>
            <Button onPress={() => setSem5(true)}>SEM-V</Button>
            <Button onPress={() => setSem6(true)}>SEM-VI</Button>
          </Layout>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Button onPress={() => setSem7(true)}>SEM-VII</Button>
            <Button onPress={() => setSem8(true)}>SEM-VIII</Button>
          </Layout>
        </Layout>
        <Modal
          visible={sem1}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setSem1(false)}
        >
          <Card disabled={true}>
            <Text style={{ fontWeight: "bold", margin: 5 }}>
              SEM I Marks Sheet
            </Text>
            <Layout style={{ marginLeft: 5, marginTop: 5 }}>
              <Text>Subject 1: {Math.floor(Math.random() * 100)}</Text>
              <Text style={{ marginTop: 5 }}>
                Subject 2: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 3: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 4: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 20 }}>
                Subject 5: {Math.floor(Math.random() * 100)}
              </Text>
            </Layout>
            <Button size="small" onPress={() => setSem1(false)}>
              Close
            </Button>
          </Card>
        </Modal>
        <Modal
          visible={sem2}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setSem2(false)}
        >
          <Card disabled={true}>
            <Text style={{ fontWeight: "bold", margin: 5 }}>
              SEM II Marks Sheet
            </Text>
            <Layout style={{ marginLeft: 5, marginTop: 5 }}>
              <Text>Subject 1: {Math.floor(Math.random() * 100)}</Text>
              <Text style={{ marginTop: 5 }}>
                Subject 2: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 3: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 4: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 20 }}>
                Subject 5: {Math.floor(Math.random() * 100)}
              </Text>
            </Layout>
            <Button size="small" onPress={() => setSem2(false)}>
              Close
            </Button>
          </Card>
        </Modal>
        <Modal
          visible={sem3}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setSem3(false)}
        >
          <Card disabled={true}>
            <Text style={{ fontWeight: "bold", margin: 5 }}>
              SEM III Marks Sheet
            </Text>
            <Layout style={{ marginLeft: 5, marginTop: 5 }}>
              <Text>Subject 1: {Math.floor(Math.random() * 100)}</Text>
              <Text style={{ marginTop: 5 }}>
                Subject 2: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 3: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 4: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 20 }}>
                Subject 5: {Math.floor(Math.random() * 100)}
              </Text>
            </Layout>
            <Button size="small" onPress={() => setSem3(false)}>
              Close
            </Button>
          </Card>
        </Modal>
        <Modal
          visible={sem4}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setSem4(false)}
        >
          <Card disabled={true}>
            <Text style={{ fontWeight: "bold", margin: 5 }}>
              SEM IV Marks Sheet
            </Text>
            <Layout style={{ marginLeft: 5, marginTop: 5 }}>
              <Text>Subject 1: {Math.floor(Math.random() * 100)}</Text>
              <Text style={{ marginTop: 5 }}>
                Subject 2: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 3: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 4: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 5: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 6: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 20 }}>
                Subject 7: {Math.floor(Math.random() * 100)}
              </Text>
            </Layout>
            <Button size="small" onPress={() => setSem4(false)}>
              Close
            </Button>
          </Card>
        </Modal>
        <Modal
          visible={sem5}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setSem5(false)}
        >
          <Card disabled={true}>
            <Text style={{ fontWeight: "bold", margin: 5 }}>
              SEM V Marks Sheet
            </Text>
            <Layout style={{ marginLeft: 5, marginTop: 5 }}>
              <Text>Subject 1: {Math.floor(Math.random() * 100)}</Text>
              <Text style={{ marginTop: 5 }}>
                Subject 2: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 3: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 4: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 20 }}>
                Subject 5: {Math.floor(Math.random() * 100)}
              </Text>
            </Layout>
            <Button size="small" onPress={() => setSem5(false)}>
              Close
            </Button>
          </Card>
        </Modal>
        <Modal
          visible={sem6}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setSem6(false)}
        >
          <Card disabled={true}>
            <Text style={{ fontWeight: "bold", margin: 5 }}>
              SEM VI Marks Sheet
            </Text>
            <Layout style={{ marginLeft: 5, marginTop: 5 }}>
              <Text>Subject 1: {Math.floor(Math.random() * 100)}</Text>
              <Text style={{ marginTop: 5 }}>
                Subject 2: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 3: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 4: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 20 }}>
                Subject 5: {Math.floor(Math.random() * 100)}
              </Text>
            </Layout>
            <Button size="small" onPress={() => setSem6(false)}>
              Close
            </Button>
          </Card>
        </Modal>
        <Modal
          visible={sem7}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setSem7(false)}
        >
          <Card disabled={true}>
            <Text style={{ fontWeight: "bold", margin: 5 }}>
              SEM VII Marks Sheet
            </Text>
            <Layout style={{ marginLeft: 5, marginTop: 5 }}>
              <Text>Subject 1: {Math.floor(Math.random() * 100)}</Text>
              <Text style={{ marginTop: 5 }}>
                Subject 2: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 3: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 4: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5 }}>
                Subject 5: {Math.floor(Math.random() * 100)}
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 20 }}>
                Subject 6: {Math.floor(Math.random() * 100)}
              </Text>
            </Layout>
            <Button size="small" onPress={() => setSem7(false)}>
              Close
            </Button>
          </Card>
        </Modal>
        <Modal
          visible={sem8}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setSem8(false)}
        >
          <Card disabled={true}>
            <Text style={{ fontWeight: "bold", margin: 5 }}>
              SEM VIII Marks Sheet
            </Text>
            <Layout style={{ marginLeft: 5, marginTop: 5 }}>
              <Text>Subject 1: {Math.floor(Math.random() * 100)}</Text>
              <Text style={{ marginTop: 5 }}>
                Subject 2: {Math.floor(Math.random() * 100) + 30}
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 20 }}>
                Subject 3: {Math.floor(Math.random() * 100)}
              </Text>
            </Layout>
            <Button size="small" onPress={() => setSem8(false)}>
              Close
            </Button>
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
