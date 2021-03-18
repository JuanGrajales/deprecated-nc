import React from "react";
import Index from "./components/Index";
import Second from "./components/Second";
import Third from "./components/Third";
import Profile from "./components/Profile";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = (props) => {
  return (
    <BrowserRouter>
      {/* if(url === "/") display Index */}
      {/* if(url === "/second") display Second */}
      {/* if(url === "/third") display Third */}
      <Nav />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
        <li>
          <Link to="/third">Third</Link>
        </li>
        <li>
          <Link to="/profile/juan">Juan</Link>
        </li>
        <li>
          <Link to="/profile/fred">Fred</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" render={() => <Index />} />
        <Route exact path="/second" render={() => <Second />} />
        <Route exact path="/third" render={() => <Third />} />
        <Route
          exact
          path="/profile/:username"
          render={(props) => (
            <Profile
              match={props.match}
              location={props.location}
              history={props.history}
              user="Wen"
            />
          )}
        />
      </Switch>
      <Footer />
      {/* <Index /> */}
      {/* <Second /> */}
      {/* <Third /> */}
    </BrowserRouter>
  );
};
export default App;
