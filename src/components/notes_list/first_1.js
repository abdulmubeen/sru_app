import React from "react";
import { Button, Icon, List, ListItem, Text } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

const data = [
  "Engineering Chemistry",
  "Mathematics-I",
  "Computer Programming",
  "Engineering Physics-I",
  "English-I",
];

export const First_One = () => {
  const getNotes = (subject) => {
    if (subject == "Engineering Chemistry") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1H-k4aTAddI6k2VbkrtvWk_Tg6xQk__EK?usp=sharing"
      );
    } else if (subject == "Mathematics-I") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1DFRjzlrhsGQARz3sdWK67k9o6VNIkRc7?usp=sharing"
      );
    } else if (subject == "Computer Programming") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1QJ2hJqDx8bw3HS0tQIx9i0q_bn1r9_aq?usp=sharing"
      );
    } else if (subject == "Engineering Physics-I") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1BQ4hDGT2sgYrBnKeBdjWh8NLIL2i5_0b?usp=sharing"
      );
    } else if (subject == "English-I") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1uad6cO32x6AHfvoeIwXrn6lSAAnhQwzM?usp=sharing"
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
      style={{ maxHeight: 330, backgroundColor: "#222B45", margin: 20 }}
      data={data}
      renderItem={renderItem}
    />
  );
};
