import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import UpdateModal from "../components/Modal";
import '../App.css';

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
        </div>
    </div>
    );
  }
}

export default IndividualBrands;