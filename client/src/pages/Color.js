import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
//import callAPI from "./PixabayAPI";

class ColorMindSearch extends Component {
    constructor() {
        //super = pass any props from the parent to the child component.
        super();
        //When you set the initial state, you want to set it as empty, or blank.
        this.state = {
            color: [],
            data: {
              model : "default",
              input : [[44,43,44],[90,83,82],"N","N","N"]
            }
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
      callAPI = () =>
        fetch(`http://colormind.io/api/`)
            .then(response => response.json()) 
            .then(data => {
                console.log(data);
                this.setState( {
                    color:data
                });
        })
      handleClick = () => {
        console.log('this is:', this);
        this.callAPI();
      }

      render() {
        //const { color } = this.state;
        return(
          <div className="App">
          <header className="App-header">
            <Header/>
          </header>
          <div className="main_app">
              <Navigation/>
  
              <div className="searches">
              <h2>Color Generator</h2>
                  <button 
                    type="submit" 
                    id="pixabay_submit"
                    className="btn"
                    onClick={this.handleClick}>
                      Generate Colors
                  </button>
              </div>
              <div className="all_pixabay_results">
                    {this.state.color.map(colors => (
                        <div style={{ background: this.state.colors, padding: 10 }}>
                          <p>Color</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
      }
}

export default ColorMindSearch;




// import React, { Component } from 'react';
// //import './App.css';
// import Navigation from "../components/Navigation";
// import Header from "../components/Header";
// import ColorSearch from "../components/ColorSearch";

// class ColorMindSearch extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };


//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Header/>
//         </header>
//         <div className="main_app">
//             <Navigation/>

//             <div className="searches">
//               <ColorSearch/>
//             </div>
//           </div>
//       </div>
//     );
//   }
// }

// export default ColorMindSearch;