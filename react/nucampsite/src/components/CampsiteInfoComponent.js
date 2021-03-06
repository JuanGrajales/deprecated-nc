import React, { Component } from "react";

class CampsiteInfoComponent extends Component {
  render() {
    if (this.props.campsite) {
      return (
        <div className="row">
          <h1>hi</h1>
        </div>
      );
    } else {
      return <div>No campsite selected yet {this.props.campsite}</div>;
    }
  }
}

export default CampsiteInfoComponent;
