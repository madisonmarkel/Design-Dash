import React, { Component } from 'react';
//import './App.css';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import PixabaySearch from "../components/PixabaySearch";
//import API from "../utils/API";

//const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

console.log(process.env.REACT_APP_PIXABAY_API_KEY)

class PixabayPage extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
//   handleInputChange = event => {
//     // Destructure the name and value properties off of event.target
//     // Update the appropriate state
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // When the form is submitted, prevent its default behavior, get recipes update the recipes state
//     event.preventDefault();
//     API.getRecipes(this.state.recipeSearch)
//       .then(res => this.setState({ recipes: res.data }))
//       .catch(err => console.log(err));
//   };
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
              <PixabaySearch/>
            </div>
          </div>
      </div>
    );
  }
}

export default PixabayPage;