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

class App extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: '',
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
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
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
    const { currentUserEmail, currentUserName } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="main_app">
            <Navigation/>
        <div className="home">
            <h2>Add a Brand</h2>
            <form>
                <TextArea
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Company Name (Required)"
                />
                <TextArea
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
              <br/><hr/><br/>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;