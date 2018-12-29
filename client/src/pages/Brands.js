import React, { Component } from 'react';
import '../App.css';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { YourBrands, ListItem } from "../components/YourBrands";
import API from "../utils/API";
import { Link } from "react-router-dom";

//const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

console.log(process.env.REACT_APP_PIXABAY_API_KEY)

class Brands extends Component {
  state = {
    brands: [],
    name: "",
    industry: "",
    slogan: ""
  };

  componentDidMount() {
    this.loadBrands();
  }

  loadBrands = () => {
    API.getBrands()
      .then(res =>
        this.setState({ brands: res.data, name: "", industry: "", slogan: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBrand = id => {
    API.deleteBrand(id)
      .then(res => this.loadBrands())
      .catch(err => console.log(err));
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
        slogan: this.state.slogan
      })
        .then(res => this.loadbrands())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="main_app">
            <Navigation/>

            <div className="searches">
              {this.state.brands.length ? (
              <YourBrands>
                {this.state.brands.map(brand => (
                  <ListItem key={brand._id}>
                    <Link to={"/brands/" + brand._id}>
                      <strong>
                        {brand.name}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </YourBrands>
            ) : (
              <h3><Link to={"/home"}>Add a Brand</Link></h3>
            )}
            </div>
          </div>
      </div>
    );
  }
}

export default Brands;