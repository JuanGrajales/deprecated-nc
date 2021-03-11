import React, { Component } from "react";

class TvShows extends Component {
  // we do not need state therefore we don't add the constructor

  displayShows = () => {
    // map syntax
    // let arrayOfHtmlElements = this.state.arrayName.map((paramName) => {
    //   return (<htmlTag>{paramName}</htmlTag>)
    // })
    // return arrayOfHtmlElements // do not freaking FORGET the return

    let newArr = this.props.tvShows.map((showName) => {
      return <li>{showName}</li>;
    });
    return newArr;

    // return this.props.tvShows.map((showName) => {
    //   return <li>{showName}</li>;
    // });
  };

  render() {
    return (
      <div>
        <h2>Props Object</h2>
        <ul>
          <li>First key in props object: {this.props.prop1}</li>
        </ul>

        <h3>Hardcoded array of tv shows</h3>
        <ul>
          <li>Good Girls</li>
          <li>Breaking Bad</li>
          <li>Scandal</li>
          <li>Game of Thrones</li>
          <li>Grey's Anatomy </li>
        </ul>

        <h3>Display tv shows with function that uses map</h3>
        <ul>{this.displayShows()}</ul>

        <h3>Display tv shows using just map</h3>
        <ul>
          {this.props.tvShows.map((showName) => {
            return <li>{showName}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TvShows;
