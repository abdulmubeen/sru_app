import React from "react";
import { Button, List, ListItem, Text } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

const data = [
  "Engineering Physics-II",
  "BEEE",
  "Computational Mathematics",
  "Environmental Studies",
  "English-II",
  "Data Structures",
];

export const First_Two = () => {
  const getNotes = (subject) => {
    if (subject == "Engineering Physics-II") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1C89Yfj21p71-PgG3CIIerNGKq_kRofVr?usp=sharing"
      );
    } else if (subject == "BEEE") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/12LEe-N2awr99mggAIa9jid-5tUwb1TZC?usp=sharing"
      );
    } else if (subject == "Computational Mathematics") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1UlQLF-UgJ9JeVPGsYUdd_5o8m-m00vT8?usp=sharing"
      );
    } else if (subject == "Environmental Studies") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1fRiDzLGfhazrYR37Y_FrsJwCBjCC19dr?usp=sharing"
      );
    } else if (subject == "English-II") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/1zJ70idb5FNkMXdZPecrjsDa2IsfUieRM?usp=sharing"
      );
    } else if (subject == "Data Structures") {
      WebBrowser.openBrowserAsync(
        "https://drive.google.com/drive/folders/18YzgZi0yaBQE_cDfUZEwZYiOa5hDF02G?usp=sharing"
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
