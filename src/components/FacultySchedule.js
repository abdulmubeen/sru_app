import React, { Component } from "react";
import { Card, Text } from "@ui-kitten/components";

export default class FacultySchedule extends Component {
  render() {
    return (
      <Card
        style={{
          alignItems: "center",
          backgroundColor: "#2d3a5e",
          marginBottom: 10,
        }}
      >
        <Text category="h6">{this.props.schedule}</Text>
      </Card>
    );
  }
}
