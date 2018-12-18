import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class IndividualBrands extends Component {
  state = {
    book: {}
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
        <div>
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
            <Link to="/">← Home</Link>
        </div>
    );
  }
}

export default IndividualBrands;