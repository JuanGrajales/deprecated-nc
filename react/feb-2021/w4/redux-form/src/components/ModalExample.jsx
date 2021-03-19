import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    return (
      <div>
        <h1>Modal</h1>
        <button onClick={this.toggleModal}>Submit Using Modal</button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Modal</ModalHeader>
          <ModalBody>Put whatever you want here... Like a form...</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
