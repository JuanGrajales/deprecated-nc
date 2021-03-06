import React, { Component } from "react";
import Directory from "./components/Directory";
const arr = [
  "Good Girls",
  "Breaking Bad",
  "Scandal",
  "Game of Thrones",
  "Grey's Anatomy",
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tvShows: arr,
    };
  }

  render() {
    return (
      <div>
        <h1 className="hi">Welcome to React</h1>
        {/* passing props */}
        <Directory tvShows={this.state.tvShows} />
      </div>
    );
  }
}

export default App;
