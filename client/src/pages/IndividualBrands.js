import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import UpdateModal from "../components/Modal";
import '../App.css';
import { TextArea } from "../components/Form";

class IndividualBrands extends Component {
  state = {
    brand: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBrand(this.props.match.params.id)
      .then(res => this.setState({ brand: res.data }))
      .catch(err => console.log(err));
  }

  passID() {
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
  handleFormSubmit = (id, body) => {
    // event.preventDefault();
    //   API.updateBrand({
    API.updateBrand(id, body
        // {
        // name: this.state.brandName,
        // industry: this.state.brandIndustry,
        // slogan: this.state.brandSlogan,
        // logo: this.state.brandLogo,
        // mainColor: this.state.brandMainColor,
        // supportingColor: this.state.brandSupportingColor,
        // images: this.state.brandImages
        // }
      )
      .then(res => this.loadBrands(), this.props.history.push('/brands'))
        .catch(err => console.log(err));
    }

    loadBrands = () => {
      API.getBrands()
        .then(res =>
          this.setState({ brands: res.data, name: "", industry: "", slogan: "", logo: "", mainColor: "", supportingColor: "", images: "", })
        )
        .catch(err => console.log(err));
    };

  saveChanges = (id, body) => {
    console.log(id)
    API.updateBrand(id, body)
      .then(res => this.props.history.push('/brands'))
      .catch(err => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBrand = id => {
    console.log(id)
    API.deleteBrand(id)
      .then(res => this.loadBrandPage(), this.props.history.push('/brands'))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="main_app">
            <Navigation/>
        </div>

        <div className="IndividualBrands">
              <h1>
                {this.state.brand.name}
              </h1>
              <h2>
                Industry: {this.state.brand.industry}
              </h2>
              <h2>
                Slogan: {this.state.brand.slogan}
              </h2>
              <h2>Logo:</h2>
                <img className="brand_images" alt="Company logo" src={this.state.brand.logo}/>
              <h2>Additional Image:</h2>
                <img className="brand_images" alt="Additional Photos" src={this.state.brand.images}/>
              <h2>Main Color:</h2>
                <p>{this.state.brand.mainColor}</p>
                <div style={{ background: this.state.brand.mainColor, padding: 10 }}/>
              <h2>Supporting Color:</h2>
                <p>{this.state.brand.supportingColor}</p>
                <div style={{ background: this.state.brand.supportingColor, padding: 10 }}/>
              <p>
                Date Created: {this.state.brand.date}
              </p>
              <UpdateModal key={() => this.passID(this.state.brand._id)} 
                brandID= {this.state.brand._id}
                brandName= {this.state.brand.name}
                brandIndustry= {this.state.brand.industry}
                brandSlogan= {this.state.brand.slogan}
                brandLogo= {this.state.brand.logo}
                brandImages= {this.state.brand.images}
                brandMainColor= {this.state.brand.mainColor}
                brandSupportingColor= {this.state.brand.supportingColor}
              />
              {/* <button className="btn" onClick={() => this.updateBrand(this.state.brand._id)}>Update</button> */}
              <button className="deleteButton" onClick={() => this.deleteBrand(this.state.brand._id)}>Delete</button>
              <br/>
            <Link to="/brands">← Your Brands</Link>

            <h2>Edit {this.state.brandName}</h2>
      <p>ID: {this.state.id}</p>
              <form>
                <h4>Name</h4>
                <TextArea
                  value={this.state.brandName}
                  // value={this.props.brandName}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Company Name (Required)"
                />
                <h4>Industry</h4>
                <TextArea
                  value={this.state.brandIndustry}
                  // value={this.props.brandIndustry}
                  onChange={this.handleInputChange}
                  name="industry"
                  placeholder="Industry (Required)"
                />
                <h4>Slogan</h4>
                <TextArea
                  value={this.state.brandSlogan}
                  // value={this.props.brandSlogan}
                  onChange={this.handleInputChange}
                  name="slogan"
                  placeholder="Slogan (Optional)"
                />
                <h4>Logo</h4>
                <TextArea
                  value={this.state.brandLogo}
                  // value={this.props.brandLogo}
                  onChange={this.handleInputChange}
                  name="logo"
                  placeholder="Logo Image Link (Optional)"
                />
                <h4>Additional Image</h4>
                <TextArea
                  value={this.state.brandImages}
                  // value={this.props.brandImages}
                  onChange={this.handleInputChange}
                  name="images"
                  placeholder="Additional Image Link (Optional)"
                />
                <h4>Main Color (HEX Code)</h4>
                <TextArea
                  value={this.state.brandMainColor}
                  // value={this.props.brandMainColor}
                  onChange={this.handleInputChange}
                  name="mainColor"
                  placeholder="Main Color HEX Code (Optional)"
                />
                <h4>Supporting Color (HEX Code)</h4>
                <TextArea
                  value={this.state.brandSupportingColor}
                  // value={this.props.brandSupportingColor}
                  onChange={this.handleInputChange}
                  name="supportingColor"
                  placeholder="Supporting Color HEX Code (Optional)"
                />
                <button className="btn" value={this.state.id} 
                // onClick={this.handleFormSubmit}
                onClick={() => this.handleFormSubmit(this.state.brand._id
                //   () => this.handleFormSubmit(
                // this.state.id, 
                // this.state.brandName,
                // this.state.brandIndustry,
                // this.state.brandSlogan,
                // this.state.brandLogo,
                // this.state.brandImages,
                // this.state.brandMainColor,
                // this.state.brandSupportingColor
                )}
                >Save Updates</button>
              </form>
        </div>
    </div>
    );
  }
}

export default IndividualBrands;