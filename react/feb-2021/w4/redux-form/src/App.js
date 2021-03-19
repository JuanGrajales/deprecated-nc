import React, { Component } from "react";
import "./App.css";
import ReduxForm from "./components/ReduxForm";
import ModalExample from "./components/ModalExample";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Week 4</h1>
        <ReduxForm />
        <ModalExample />
      </div>
    );
  }
}

export default App;
