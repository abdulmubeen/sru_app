import React from "react";
import { Button, List, ListItem, Text } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

const data = [
  "Project Management",
  "Data Warehousing and Data Mining",
  "Grid and Cloud Computing",
  "Design Patterns",
  "Software Project Management",
  "Data Modelling",
];

export const Fourth_One = () => {
  const getNotes = (subject) => {
    if (subject == "Project Management") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1r6Kp_8PSIBmeUMbk_Fr_DsIVxVU3BWl6?usp=sharing"
      );
    } else if (subject == "Data Warehousing and Data Mining") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/13MOgYYuxsJpWs8uS7zeicsuiYKIrrD7m?usp=sharing"
      );
    } else if (subject == "Grid and Cloud Computing") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1dMwLJsmHMkt8ELTWPqiGTXxl8m0Dr9xz?usp=sharing"
      );
    } else if (subject == "Design Patterns") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1Cno5snwPpWpFpqwJHnKnOTPkoEQD8F90?usp=sharing"
      );
    } else if (subject == "Software Project Management") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1GW7ZhbSgoDKz9kECEUjLeHB_c0kcOMXX?usp=sharing"
      );
    } else if (subject == "Data Modelling") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1DukSB1P6jv0aUMZ-2rroWuLJAxr2lB_v?usp=sharing"
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
      style={{ maxHeight: 350, backgroundColor: "#222B45", margin: 20 }}
      data={data}
      renderItem={renderItem}
    />
  );
};
