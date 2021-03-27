import React, { Component } from "react";
import Parent from "./components/Parent";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Prop Drilling</h1>
        <Parent />
      </div>
    );
  }
}

export default App;
