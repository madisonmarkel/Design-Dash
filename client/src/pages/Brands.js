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
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBrands();
  }

  loadBrands = () => {
    API.getBrands()
      .then(res =>
        this.setState({ brands: res.data, title: "", author: "", synopsis: "" })
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
    if (this.state.title && this.state.author) {
      API.saveBrand({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadbrands())
        .catch(err => console.log(err));
    }
  };
  // state = {
  //   response: '',
  //   post: '',
  //   responseToPost: '',
  // };
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };
  
  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/pixabay', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
  //   this.setState({ responseToPost: body });
  // };

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
                        {brand.title} by {brand.author}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </YourBrands>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
          </div>
      </div>
    );
  }
}

export default Brands;