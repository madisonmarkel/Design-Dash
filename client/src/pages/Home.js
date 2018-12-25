import React, { Component } from 'react';
//import './App.css';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import YourBrands from "../components/YourBrands"
//import PixabaySearch from "../components/Pixabay";

//const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

console.log(process.env.REACT_APP_PIXABAY_API_KEY)

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
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
        </div>

        <h2>Welcome to Design Dash!</h2>
        <p>
          Here you can save multiple company's branding information. Ranging from colors, logos, slogan, and industry, Design Dash is the easiest way to manage and share information with your team.
        </p>
        <p>
          Design Dash also allows you to create a brand image. Search for photos, colors, and inspiration to guide your brand identity. 
        </p>
        <p>
          Create, manage, and store your and others' brand so your team can expound on the baseline and create more marketing materials.
        </p>
      </div>
    );
  }
}

export default App;