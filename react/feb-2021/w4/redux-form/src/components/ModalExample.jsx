import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class ModalExample extends Component {
  constructor(props) {
    super(props);
    // Part 3 creating boolean in state
    this.state = {
      isModalOpen: false,
    };
  }

  // Part 4 creating function to toggle
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    return (
      <div>
        <h1>Modal</h1>
        {/* Part 1 button */}
        <button onClick={this.toggleModal}>Submit Using Modal</button>

        {/* part 2 Modal  */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Modal</ModalHeader>
          <ModalBody>Put whatever you want here... Like a form...</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
