import React, { Component } from "react";
import { Icon, Card, Text } from "@ui-kitten/components";

export default class EventsData extends Component {
  render() {
    return (
      <Card
        style={{
          alignItems: "center",
          backgroundColor: "#2d3a5e",
          marginBottom: 10,
        }}
      >
        <Text category="h6">{this.props.title}</Text>
        <Text style={{ marginTop: 10 }}>{this.props.info}</Text>
        <Text style={{ marginTop: 15 }}>
          <Text style={{ fontWeight: "bold" }}>Date:</Text> {this.props.date}
        </Text>
        <Text style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Time:</Text> {this.props.time}
        </Text>
        <Text style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Venue:</Text> {this.props.venue}
        </Text>
      </Card>
    );
  }
}
