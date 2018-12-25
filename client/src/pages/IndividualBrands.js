import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
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
              <h2>
                Date Created: {this.state.brand.date}
              </h2>
            <Link to="/brands">← Your Brands</Link>
        </div>
    </div>
    );
  }
}

export default IndividualBrands;