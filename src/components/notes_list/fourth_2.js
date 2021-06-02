import React from "react";
import { Button, List, ListItem, Text } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

const data = ["Information Retreival System", "Big Data Analytics"];

export const Fourth_Two = () => {
  const getNotes = (subject) => {
    if (subject == "Information Retreival System") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1CvwAC_HftL-9hUkoCBJeoUeN3cp2a10t?usp=sharing"
      );
    } else if (subject == "Big Data Analytics") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1WrPTYP0kK8dtPc6u69Wu4Hz13gNybSxX?usp=sharing"
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
