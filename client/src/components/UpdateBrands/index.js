import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
// import API from "../utils/API";
// import Navigation from "../components/Navigation";
// import Header from "../components/Header";

class UpdateModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }

    // saveChanges = id => {
    //     console.log(id)
    //     API.updateBrand(id)
    //       .then(res => this.props.history.push('/brands'))
    //       .catch(err => console.log(err));
    //   }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
  
      return (
        <div>
          <button className="btn" onClick={this.handleShow}>
            Update Brand
          </button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
  
              <hr />
  
              <h4>Overflowing text to show scroll behavior</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn" onClick={this.saveChanges}>Save Changes</button>
              <button className="btn" onClick={this.handleClose}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  export default UpdateModal;