import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Fragment from "./components/Fragment";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Fragment p2="v2" /> */}
        <h1>React Lecture 3</h1>
        <Nav />
        <Switch>
          <Route
            exact
            path="/profile/:param1"
            render={() => <Profile p1="v1" />}
          />

          {/* <Route
            exact
            path="/profile/:userid"
            render={() => <Profile p1="v1" />}
          /> */}

          {/* <Route
            exact
            path="/url4"
            render={() => <ComponentName prop1="v1" />}
          /> */}

          {/* <Route component={ComponentName} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
