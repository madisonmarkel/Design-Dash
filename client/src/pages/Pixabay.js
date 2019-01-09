import React, { Component } from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import PixabaySearch from "../components/PixabaySearch";


class PixabayPage extends Component {
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