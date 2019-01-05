import React, { Component } from 'react';
//import '../App.css';
import API from "../../utils/API";
import { TextArea } from "../Form";

class Brands extends Component {
  state = {
    brands: [],
    name: "",
    industry: "",
    slogan: ""
  };

//   componentDidMount() {
//     //API.getBrand(this.props.match.params.id)
//     API.getBrand(this.state.brand.id)
//       .then(res => this.setState({ brand: res.data }))
//       .catch(err => console.log(err));
//     console.log(this);
//     console.log(this.state.brand.id);
//     console.log(this.state._id);
//   }

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

  saveChanges = (id, body) => {
        console.log(id)
        API.updateBrand(id, body)
          .then(res => this.props.history.push('/brands'))
          .catch(err => console.log(err));
      }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = id => {
    // event.preventDefault();
    //   API.updateBrand({
    API.updateBrand(id, 
        {
        name: this.brandName,
        industry: this.brandIndustry,
        slogan: this.brandSlogan,
        logo: this.brandLogo,
        mainColor: this.brandMainColor,
        supportingColor: this.brandSupportingColor,
        images: this.brandImages
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
      <h2>Edit {this.props.brandName}</h2>
      <p>ID: {this.props.id}</p>
              <form>
                <h4>Name</h4>
                <TextArea
                  value={this.brandName}
                  // value={this.props.brandName}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Company Name (Required)"
                />
                <h4>Industry</h4>
                <TextArea
                  value={this.brandIndustry}
                  // value={this.props.brandIndustry}
                  onChange={this.handleInputChange}
                  name="industry"
                  placeholder="Industry (Required)"
                />
                <h4>Slogan</h4>
                <TextArea
                  value={this.brandSlogan}
                  // value={this.props.brandSlogan}
                  onChange={this.handleInputChange}
                  name="slogan"
                  placeholder="Slogan (Optional)"
                />
                <h4>Logo</h4>
                <TextArea
                  value={this.brandLogo}
                  // value={this.props.brandLogo}
                  onChange={this.handleInputChange}
                  name="logo"
                  placeholder="Logo Image Link (Optional)"
                />
                <h4>Additional Image</h4>
                <TextArea
                  value={this.brandImages}
                  // value={this.props.brandImages}
                  onChange={this.handleInputChange}
                  name="images"
                  placeholder="Additional Image Link (Optional)"
                />
                <h4>Main Color (HEX Code)</h4>
                <TextArea
                  value={this.brandMainColor}
                  // value={this.props.brandMainColor}
                  onChange={this.handleInputChange}
                  name="mainColor"
                  placeholder="Main Color HEX Code (Optional)"
                />
                <h4>Supporting Color (HEX Code)</h4>
                <TextArea
                  value={this.brandSupportingColor}
                  // value={this.props.brandSupportingColor}
                  onChange={this.handleInputChange}
                  name="supportingColor"
                  placeholder="Supporting Color HEX Code (Optional)"
                />
                <button className="btn" value={this.props.id} 
                // onClick={this.handleFormSubmit}
                onClick={() => this.handleFormSubmit(
                this.props.id, 
                this.brandName,
                this.brandIndustry,
                this.brandSlogan,
                this.brandLogo,
                this.brandImages,
                this.brandMainColor,
                this.brandSupportingColor
                )}
                >Save Updates</button>
              </form>
      </div>
    );
  }
}

export default Brands;