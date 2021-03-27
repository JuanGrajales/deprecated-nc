import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Parent</h2>
        <Child p1={this.props.p1} />
      </div>
    );
  }
}

export default Parent;
