import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>React Lecture 3</h1>
        <Nav />
        <Switch>
          {/* Route when you don't need to pass props to component */}
          {/* <Route
            path="/url"
            component={ComponentYouWantToDisplayForSpecificURL}
          /> */}

          {/* Route when you need to pass props to component */}
          {/* <Route
            exact
            path="/url2"
            render={() => <ComponentName prop1="v1" />}
          /> */}

          {/* Redirect when you cannot find a url that matches a path */}
          {/* <Redirect to="/home" /> */}

          <Route exact path="/profile" render={() => <Profile p1="v1" />} />

          <Route
            exact
            path="/profile/:userid"
            render={() => <Profile p1="v1" />}
          />

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
