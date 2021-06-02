import React from "react";
import { Button, Text, List, ListItem } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

const data = [
  "EFE",
  "Engineering Ethics",
  "Mechotronics",
  "DAA",
  "Computer Networks",
];

export const Third_One = () => {
  const getNotes = (subject) => {
    if (subject == "EFE") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1IbAoi2pRGMiuR0X_xHH4ITyuKyeIibVq?usp=sharing"
      );
    } else if (subject == "Engineering Ethics") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/16G2TOPSKKy7cKdHPhQJMyZ0e6v5phT31?usp=sharing"
      );
    } else if (subject == "Mechotronics") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1Opo0PU2IWd96_TwZ4TOg54Ip8ENo4esa?usp=sharing"
      );
    } else if (subject == "DAA") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1sPsE3r2UhAmRgQIfr3gvZsetGhvRXYip?usp=sharing"
      );
    } else if (subject == "Computer Networks") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/15a01rIx9niWsH0SFx2Ss8gMORX6TF6Fs?usp=sharing"
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
