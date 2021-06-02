import React from "react";
import { Button, Text, List, ListItem } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

const data = [
  "Probability and Statistics",
  "MPES",
  "Operating Systems",
  "Theory of Computation",
  "Web Technologies",
];

export const Second_Two = () => {
  const getNotes = (subject) => {
    if (subject == "Probability and Statistics") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1KzhHugJh5a70VA1_vk7sLfJJIhWcfujW?usp=sharing"
      );
    } else if (subject == "MPES") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1Eq8zY8QFftWbG8ll8sGaJ5bKPbjQMHkv?usp=sharing"
      );
    } else if (subject == "Operating Systems") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1f46skm324WIhpOHu6JhYiwZ_JC6Ao46W?usp=sharing"
      );
    } else if (subject == "Theory of Computation") {
      console.log("TOC");
    } else if (subject == "Web Technologies") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1asiSt_t_oFlPS1Snjdu7j0edPFHWC-hc?usp=sharing"
      );
    }
  };

  const renderItem = ({ item }) => (
    <ListItem style={{ justifyContent: "space-between" }}>
      <Text> {`${item}`} </Text>
      <Button
        style={{ justifyContent: "flex-end" }}
        size="small"
        onPress={() => getNotes(item)}
      >
        Download
      </Button>
    </ListItem>
  );

  return (
    <List
      style={{ maxHeight: 320, backgroundColor: "#222B45", margin: 20 }}
      data={data}
      renderItem={renderItem}
    />
  );
};
