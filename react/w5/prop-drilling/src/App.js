import React, { Component } from "react";
import Parent from "./components/Parent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1: "value 1",
    };
  }

  render() {
    return (
      <div>
        <h1>Prop Drilling</h1>
        <h1>App state {this.state.p1}</h1>
        <Parent p1={this.state.p1} />
      </div>
    );
  }
}

export default App;
