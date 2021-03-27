import React, { Component } from "react";
import { Provider } from "react-redux";
import { myStore } from "./config/store";
import Count from "./components/Count";

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <div>
          <h1>React with Redux</h1>
          <Count />
        </div>
      </Provider>
    );
  }
}

export default App;
