import React, { Component } from 'react';
//import '../App.css';
import API from "../../utils/API";
import { TextArea } from "../Form";

class Brands extends Component {
  state = {
    brand: [],
    // name: this.props.name,
    // industry: this.props.industry,
    // slogan: this.props.slogan,
    // logo: this.props.logo, 
    // mainColor: this.props.mainColor,
    // supportingColor: this.props.supportingColor,
    // images: this.props.images,
    // brands: [],
    // _id: "",
    // name: "",
    // industry: "",
    // slogan: "",
    // logo: "", 
    // mainColor: "",
    // supportingColor: "",
    // images: "",
  };
  componentDidMount() {
    API.getBrand(this.props.id, this.props.name, this.props.industry, this.props.slogan, this.props.logo, this.props.mainColor, this.props.supportingColor,this.props.images)
      .then(res => this.setState({ brand: res.data }))
      .catch(err => console.log(err));
  }

  loadBrands = id => {
    API.getBrands(id)
      .then(res =>
        this.setState({ brands: res.data, name: "", industry: "", slogan: "" })
      )
      .catch(err => console.log(err));
  };

//   updateBrand = id => {
//     API.updateBrand(id)
//       .then(res => this.props.history.push('/brands'))
//     //   .then(res => this.loadBrands())
//       .catch(err => console.log(err));
//   };

  // saveChanges = (id, body) => {
  //       console.log(id)
  //       API.updateBrand(id, body)
  //         .then(res => this.props.history.push('/brands'))
  //         .catch(err => console.log(err));
  //     }
  handleTextChange = event => {
    this.setState({ brand: event.target.value });
  };


  handleFormSubmit = id => {
    // event.preventDefault();
    //   API.updateBrand({
    API.updateBrand(id, 
        {
        name: this.state.brand.name,
        industry: this.state.brand.industry,
        slogan: this.state.brand.slogan,
        logo: this.state.brand.logo,
        mainColor: this.state.brand.mainColor,
        supportingColor: this.state.brand.supportingColor,
        images: this.state.brand.images
        }
      )
      .then(res => this.loadBrands(), 
            //this.props.history.push('/brands')
            )
        .catch(err => console.log(err));
    }
  

  render() {
    return (
      <div className="App">
      <h2>Edit {this.state.brand.name}</h2>
      <p>ID: {this.props.id}</p>
              <form>
                <h4>Name</h4>
                <TextArea
                  value={this.state.brand.name}
                  onChange={this.handleTextChange}
                  // value={this.props.brandName}
                  name="name"
                  placeholder="Company Name (Required)"
                />
                <h4>Industry</h4>
                <TextArea
                  value={this.state.brand.industry}
                  onChange={this.handleTextChange}
                  // value={this.props.brandIndustry}
                  name="industry"
                  placeholder="Industry (Required)"
                />
                <h4>Slogan</h4>
                <TextArea
                  value={this.state.brand.slogan}
                  onChange={this.handleTextChange}
                  // value={this.props.brandSlogan}
                  name="slogan"
                  placeholder="Slogan (Optional)"
                />
                <h4>Logo</h4>
                <TextArea
                  value={this.state.brand.logo}
                  onChange={this.handleTextChange}
                  // value={this.props.brandLogo}
                  name="logo"
                  placeholder="Logo Image Link (Optional)"
                />
                <h4>Additional Image</h4>
                <TextArea
                  value={this.state.brand.images}
                  onChange={this.handleTextChange}
                  // value={this.props.brandImages}
                  name="images"
                  placeholder="Additional Image Link (Optional)"
                />
                <h4>Main Color (HEX Code)</h4>
                <TextArea
                  value={this.state.brand.mainColor}
                  onChange={this.handleTextChange}
                  // value={this.props.brandMainColor}
                  name="mainColor"
                  placeholder="Main Color HEX Code (Optional)"
                />
                <h4>Supporting Color (HEX Code)</h4>
                <TextArea
                  value={this.state.brand.supportingColor}
                  onChange={this.handleTextChange}
                  // value={this.props.brandSupportingColor}
                  name="supportingColor"
                  placeholder="Supporting Color HEX Code (Optional)"
                />
                <button className="btn" value={this.props.id} 
                // onClick={this.handleFormSubmit}
                onClick={() => this.handleFormSubmit(
                this.props.id, 
                // this.state.brand.name,
                // this.state.brand.industry,
                // this.state.brand.slogan,
                // this.state.brand.logo,
                // this.state.brand.images,
                // this.state.brand.mainColor,
                // this.state.brand.supportingColor
                )}
                >Save Updates</button>
              </form>
      </div>
    );
  }
}

export default Brands;