import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child extends Component {
  render() {
    return (
      <div>
        <h3>Child</h3>
        <GrandChild p1={this.props.p1} />
      </div>
    );
  }
}

export default Child;
