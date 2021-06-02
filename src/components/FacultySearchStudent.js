import React, { Component } from "react";
import { Card, Text } from "@ui-kitten/components";

export default class FacultySearchStudent extends Component {
  render() {
    return (
      <Card style={{ backgroundColor: "#2d3a5e" }}>
        <Text>
          <Text style={{ fontWeight: "bold", marginRight: 1 }}>
            Student Name:
          </Text>{" "}
          {this.props.sname}
        </Text>
        <Text style={{ marginTop: 10, marginRight: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Father Name:</Text>{" "}
          {this.props.fname}
        </Text>
        <Text style={{ marginTop: 10, marginRight: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Mother Name:</Text>{" "}
          {this.props.mname}
        </Text>
        <Text style={{ marginTop: 10, marginRight: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Parent Contact:</Text>{" "}
          {this.props.pcontact}
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 5, marginRight: 1 }}>
          <Text style={{ fontWeight: "bold" }}>Attendance Percentage:</Text>{" "}
          {this.props.attendpercentage}
        </Text>
      </Card>
    );
  }
}
