import React, { Component } from "react";
import "./App.css";
import { LocalForm, Control, Errors } from "react-redux-form";

class App extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className="App">
        <h1>React Redux Form</h1>
        {/* Reading documentation */}
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <div>
            <label htmlFor="matchIdForInput">Username</label>
            <Control.text
              model=".username"
              id="matchIdForInput"
              placeholder="username"
            />
          </div>
          <button type="submit">Submit</button>
        </LocalForm>
      </div>
    );
  }
}

export default App;

// prop of Control.text component
// validators={{
//   required: (val) => val && val.length > 0,
//   minLength: (val) => val && val.length > 2,
// }}

{
  /* <Errors
  className="text-danger"
  model=".username"
  show="touched"
  component="div"
  messages={{
    required: "Required",
    minLength: "Must be at least 2 characters",
  }}
/>; */
}
