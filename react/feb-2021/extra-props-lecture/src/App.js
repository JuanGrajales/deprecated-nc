import React, { Component } from "react";
import TvShows from "./components/TvShows";

// const showsArr = [
//   "Good Girls",
//   "Breaking Bad",
//   "Scandal",
//   "Game of Thrones",
//   "Grey's Anatomy",
// ];

class App extends Component {
  // constructor is only required when you are using state
  constructor(props) {
    super(props);
    this.state = {
      tvShows: [
        "Good Girls",
        "Breaking Bad",
        "Scandal",
        "Game of Thrones",
        "Grey's Anatomy",
      ],
    };
  }

  removeShow = () => {
    let newArr = [...this.state.tvShows];
    newArr.pop();
    this.setState({
      tvShows: newArr,
    });
  };

  displayShows = () => {
    // map syntax
    // let arrayOfHtmlElements = this.state.arrayName.map((paramName) => {
    //   return (<htmlTag>{paramName}</htmlTag>)
    // })
    // return arrayOfHtmlElements

    // map shorthand for inside of a function
    // return this.state.arrayName.map((paramName) => {
    //   return (<htmlTag>{paramName}</htmlTag>)
    // })

    // notes:
    // the array will normally be reference as this.state.arrayName

    let newArr = this.state.tvShows.map((tvShow) => {
      return <li>{tvShow}</li>;
    });
    console.log(newArr);

    return newArr;
  };

  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <h2>App js</h2>
        <h3>Hardcoded array of tv shows</h3>
        <ul>
          <li>Good Girls</li>
          <li>Breaking Bad</li>
          <li>Scandal</li>
          <li>Game of Thrones</li>
          <li>Grey's Anatomy </li>
        </ul>

        <button onClick={this.removeShow}>Remove Show</button>

        <h2>Tv Shows from method</h2>
        {/* displays array of tv shows using map */}
        <ul>{this.displayShows()}</ul>

        <h2>TvShows js</h2>
        {/* calling the component so it displays the JSX in the browser */}
        <TvShows prop1="John" prop2 tvShows={this.state.tvShows} />
        {/* props steps
            step 1: finding where you call the component that you want to pass the prop to 
            step 2: after the name of the component but before the /> create a name for the prop (should be camelCase) 
            step 3: give a value to the prop using the assignment operator (=) 
            step 4: go to the file where you create the component and call the prop using this.props.propName */}

        {/* <Movies/> */}
      </div>
    );
  }
}

export default App;

// Notes
// install Reactjs Code Snippets to VS Code

// rcc shortcut for creating a react class component
// rsc shortcut for creating a react functional component

// steps for creating a component

// let arr = ["Juan", "Paz", "Wen", "Jo"];

// let newArr = ["<li>Juan</li>", "<li>Paz</li>", "<li>Wen</li>", "<li>Jo</li>"];
