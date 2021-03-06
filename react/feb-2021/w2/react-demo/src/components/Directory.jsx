import React, { Component } from "react";
// const arr = [
//   "Good Girls",
//   "Breaking Bad",
//   "Scandal",
//   "Game of Thrones",
//   "Grey's Anatomy",
// ];

// const newArr = [
//   "<li>Good Girls</li>",
//   "<li>Breaking Bad</li>",
//   "<li>Scandal</li>",
//   "<li>Game of Thrones</li>",
//   "<li>Grey's Anatomy</li>",
// ];

class Directory extends Component {
  renderTvShows = () => {
    // let liArr = arr.map((tvShow) => {
    //   return <li>{tvShow}</li>;
    // });
    // return liArr;

    return this.props.tvShows.map((tvShow) => {
      return <li key={tvShow}>{tvShow}</li>;
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.renderTvShows()}
          {/* {this.props.prop1} */}
          {/* <li>Good Girls</li>
          <li>Breaking Bad</li>
          <li>Scandal</li>
          <li>Game of Thrones</li>
          <li>Grey's Anatomy</li> */}
        </ul>
      </div>
    );
  }
}

export default Directory;
