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
      return (
        <div>
          <ul>
            <li>prop4 = {this.props.prop4}</li>
            <li> {this.props.name}</li>
            <li>
              {this.props.infoObj.k1} {this.props.infoObj.k2}{" "}
              {this.props.infoObj.k3}
            </li>
          </ul>
          No campsite selected yet
        </div>
      );
    }
  }
}

export default CampsiteInfoComponent;
