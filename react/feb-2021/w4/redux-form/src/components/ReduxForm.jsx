import React, { Component } from "react";
import { LocalForm, Control, Errors } from "react-redux-form";

class ReduxForm extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div>
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

export default ReduxForm;
