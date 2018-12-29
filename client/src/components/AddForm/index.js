import React, { Component } from 'react';
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../Form";
import { Link } from "react-router-dom";

//const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

console.log(process.env.REACT_APP_PIXABAY_API_KEY)

class AddForm extends Component {
  state = {
    brands: [],
    name: "",
    industry: "",
    slogan: "",
    logo: "", 
    mainColor: "",
    supportingColor: "",
    images: "",
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.industry) {
      API.saveBrand({
        name: this.state.name,
        industry: this.state.industry,
        slogan: this.state.slogan,
        logo: this.state.logo,
        mainColor: this.state.mainColor,
        supportingColor: this.state.supportingColor,
        images: this.state.images
      })
        .then(res => this.loadBrands())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="App">
            <form>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Company Name (Required)"
                />
                <Input
                  value={this.state.industry}
                  onChange={this.handleInputChange}
                  name="industry"
                  placeholder="Industry (Required)"
                />
                <TextArea
                  value={this.state.slogan}
                  onChange={this.handleInputChange}
                  name="slogan"
                  placeholder="Slogan (Optional)"
                />
                <TextArea
                  value={this.state.logo}
                  onChange={this.handleInputChange}
                  name="logo"
                  placeholder="Logo Image Link (Optional)"
                />
                <TextArea
                  value={this.state.mainColor}
                  onChange={this.handleInputChange}
                  name="mainColor"
                  placeholder="Main Color HEX Code (Optional)"
                />
                <TextArea
                  value={this.state.supportingColor}
                  onChange={this.handleInputChange}
                  name="supportingColor"
                  placeholder="Supporting Color HEX Code (Optional)"
                />
                <TextArea
                  value={this.state.images}
                  onChange={this.handleInputChange}
                  name="images"
                  placeholder="Additional Image Link (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.name && this.state.industry)}
                  onClick={this.handleFormSubmit}
                >
                  Submit New Brand
                </FormBtn>
              </form>
      </div>
    );
  }
}

export default AddForm;