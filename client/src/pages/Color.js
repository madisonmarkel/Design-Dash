import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ColorMindSearch from "../components/ColorSearch"

class ColorMindSearchPage extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
    };
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <Header/>
            </header>
            <div className="main_app">
                <Navigation/>
    
                <div className="searches">
                  <ColorMindSearch/>
                </div>
              </div>
          </div>
        );
      }
    }
export default ColorMindSearchPage;