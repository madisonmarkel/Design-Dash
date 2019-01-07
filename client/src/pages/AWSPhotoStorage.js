import React, { Component } from 'react';
import '../App.css';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { YourBrands, ListItem } from "../components/YourBrands";
import API from "../utils/API";
import { Link } from "react-router-dom";
import FileUpload from "../components/AWSUpload"
import FileDownload from "../components/AWSGet"

//const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

console.log(process.env.REACT_APP_PIXABAY_API_KEY)

class AWSPhotoStorage extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="main_app">
            <Navigation/>

            <FileUpload/>
            <FileDownload />
          </div>
      </div>
    );
  }
}

export default AWSPhotoStorage;