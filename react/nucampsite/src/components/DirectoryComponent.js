import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import CampsiteInfoComponent from "./CampsiteInfoComponent";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsite: null,
      name: "Jonathan",
      key3: "hi",
      key4: "value",
      infoObj: {
        k1: "v1",
        k2: "v2",
        k3: "v3",
      },
    };
  }

  onCampsiteSelect(campsite) {
    this.setState({ selectedCampsite: campsite });
  }

  renderSelectedCampsite(campsite) {
    if (campsite) {
      return (
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <h1>{this.state.name}</h1>
        <div className="row">{directory}</div>
        <CampsiteInfoComponent
          campsite={this.state.selectedCampsite}
          prop2="value"
          prop3="value 3"
          prop4="value 4"
          name={this.state.name}
          infoObj={this.state.infoObj}
        />
      </div>
    );
  }
}

export default Directory;
