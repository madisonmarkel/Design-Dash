import React, { Component } from 'react';
import '../App.css';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { YourBrands, ListItem } from "../components/YourBrands";
import API from "../utils/API";
import { Link } from "react-router-dom";
import FileUpload from "../components/AWSUpload"
import FileDownload from "../components/AWSGet"

class AWSPhotoStorage extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="main_app">
            <Navigation/>
          <div className="searches">
            <FileUpload/>
            <FileDownload />
          </div>
          </div>
      </div>
    );
  }
}

export default AWSPhotoStorage;