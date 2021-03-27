import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child extends Component {
  render() {
    return (
      <div>
        <h3>Child</h3>
        <GrandChild />
      </div>
    );
  }
}

export default Child;
