import React, { Component } from "react";
import { connect } from "react-redux";
import { addOne, addFive } from "../actions/countActions";

class Count extends Component {
  render() {
    return (
      <div>
        <h1>Count {this.props.count}</h1>
        <button onClick={this.props.addOne}>Increment</button>
        <button onClick={() => this.props.addFive(5)}>Increment 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  addOne: addOne,
  addFive: addFive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
