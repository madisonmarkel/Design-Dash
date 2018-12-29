import React, { Component } from 'react';
//import './App.css';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import API from "../utils/API";
//import YourBrands from "../components/YourBrands"
import { Input, TextArea, FormBtn } from "../components/Form";
import { YourBrands, ListItem } from "../components/YourBrands";
import { Link } from "react-router-dom";
//import PixabaySearch from "../components/Pixabay";

//const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

console.log(process.env.REACT_APP_PIXABAY_API_KEY)

class App extends Component {
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

  componentDidMount() {
    this.loadBrands();
  }

  loadBrands = () => {
    API.getBrands()
      .then(res =>
        this.setState({ brands: res.data, name: "", industry: "", slogan: "", logo: "", mainColor: "", supportingColor: "", images: "", })
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
        <div className="info">
          <h2>Welcome to Design Dash!</h2>
            <p>Here you can save multiple company's branding information. Ranging from colors, logos, slogan, and industry, Design Dash is the easiest way to manage and share information with your team.</p>
            <p>Design Dash also allows you to create a brand image. Search for photos, colors, and inspiration to guide your brand identity. </p>
            <p>Create, manage, and store your and others' brand so your team can expound on the baseline and create more marketing materials.</p>
            <button className="btn"><Link to="/home">Login</Link></button>
            <button className="btn"><Link to="/home">Sign Up</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;