import React, { Component } from "react";

class GrandChild extends Component {
  render() {
    return (
      <div>
        <h4>GrandChild</h4>
        <p>Prop: {this.props.p1}</p>
      </div>
    );
  }
}

export default GrandChild;
