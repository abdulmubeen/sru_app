import React from "react";
import { Button, Text, List, ListItem } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

const data = [
  "Technical Writing",
  "Software Engineering",
  "Compiler Design",
  "CGNS",
  "Distributed Systems",
];

export const Third_Two = () => {
  const getNotes = (subject) => {
    if (subject == "Technical Writing") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1VlEVV-ABeLeSYSDOOr-VPbAZTCa1CtVH?usp=sharing"
      );
    } else if (subject == "Software Engineering") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1oL_GB2afdQdOMoT1siQ414Fo6pxWskpa?usp=sharing"
      );
    } else if (subject == "Compiler Design") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1gnmkPY_KCpcaDfj0UOoNK4P1IgvzNH_S?usp=sharing"
      );
    } else if (subject == "CGNS") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1DORsKtxztVLLw9bU7ZNlFf33TXaSWGAC?usp=sharing"
      );
    } else if (subject == "Distributed Systems") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1I-CxkUj95UyFGeVsFx4Cp_3G2UiMCF5C?usp=sharing"
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
