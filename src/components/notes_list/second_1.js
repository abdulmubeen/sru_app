import React from "react";
import { Button, Text, List, ListItem } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

const data = [
  "CAO",
  "Data Base Management Systems",
  "MFCS",
  "OOPS through JAVA",
  "Gender Sensitization",
];

export const Second_One = () => {
  const getNotes = (subject) => {
    if (subject == "CAO") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1omAGnkoRjbMp7T9Pcd4euFI5pVphRwVg?usp=sharing"
      );
    } else if (subject == "Data Base Management Systems") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1_fKfC7RKfJ5toW9Neg3BSvKUp6abW4hk?usp=sharing"
      );
    } else if (subject == "MFCS") {
      console.log("MFCS");
    } else if (subject == "OOPS through JAVA") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/11TgsH2t7v8whcbhgsQnIJ1-SP8Dx00ph?usp=sharing"
      );
    } else if (subject == "Gender Sensitization") {
      console.log("GS");
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
