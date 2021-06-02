import React, { Component } from "react";
import { Card, Text } from "@ui-kitten/components";

export default class FacultyInfo extends Component {
  render() {
    return (
      <Card style={{ marginBottom: 10, backgroundColor: "#2d3a5e" }}>
        <Text>
          <Text style={{ fontWeight: "bold", marginRight: 1 }}>
            Faculty Name:{" "}
          </Text>
          {this.props.fname}
        </Text>
        <Text style={{ marginTop: 10, marginRight: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Contact Number: </Text>{" "}
          {this.props.phnno}
        </Text>
        <Text style={{ marginTop: 10, marginRight: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Email ID: </Text>{" "}
          {this.props.email}
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 5, marginRight: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Subject Handling: </Text>{" "}
          {this.props.subject}
        </Text>
      </Card>
    );
  }
}
