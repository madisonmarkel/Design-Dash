import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import UpdateBrandsModalInfo from "../UpdateBrandsModalInfo";
// import API from "../../utils/API";
//import API from "../../utils/API";
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
        brand: {},
        show: false
      };
    }
    passID() {
      console.log(!this.state.brand._id)
      this.setState({
          brandID: !this.state.brand._id,
          brandName: !this.state.brand.name,
          brandIndustry: !this.state.brand.industry,
          brandSlogan: !this.state.brand.slogan,
          brandLogo: !this.state.brand.logo,
          brandImages: !this.state.brand.images,
          brandMainColor: !this.state.brand.mainColor,
          brandSupportingColor: !this.state.brand.supportingColor,
      });
    };
  
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
            <Modal.Header>
              <Modal.Title>Update Brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UpdateBrandsModalInfo key={() => this.passID(this.props.brandID)} 
                id= {this.props.brandID}
                brandName= {this.props.brandName}
                brandIndustry= {this.props.brandIndustry}
                brandSlogan= {this.props.brandSlogan}
                brandLogo= {this.props.brandLogo}
                brandImages= {this.props.brandImages}
                brandMainColor= {this.props.brandMainColor}
                brandSupportingColor= {this.props.brandSupportingColor} />
            </Modal.Body>
            <Modal.Footer>
              <button className="btn" onClick={this.handleClose}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  export default UpdateModal;