// =================================== COLORMIND SEARCH ===================================================
import React, {Component} from "react";

class ColorMindSearch extends Component {
    state = {
        color: [],
    };

    rgbToHex(color){
        return "#" +
         ("0" + parseInt(color[0]).toString(16)).slice(-2) +
         ("0" + parseInt(color[1]).toString(16)).slice(-2) +
         ("0" + parseInt(color[2]).toString(16)).slice(-2);
       }

    // componentDidUpdate () {
    callAPI = () => {
        return fetch(`http://colormind.io/api/`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify({model : "default"}) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
    }

    setColor = () => {
        this.callAPI().then(data => this.setState({color: data.result}))
    }
      render() {
        //const { color } = this.state;
        return(
          <div className="App">
  
              <div className="searches">
              <h2>Color Generator</h2>
                  <button 
                    type="submit" 
                    id="pixabay_submit"
                    className="btn"
                    //onClick={this.handleClick}>
                    onClick={this.setColor}>
                      New Palette
                  </button>
              </div>
              <div className="all_pixabay_results">
                
                    {this.state.color.map(colors => (
                        <div key={colors} style={{ background: "rgb(" + colors + ")", padding: 10 }}
                        >
                          <p id={colors}>rgb({colors.toString()})</p>
                        </div>
                    ))}
            </div>
        </div>
        )
      }
}

export default ColorMindSearch;
























//import React from "react";
//import PIXABAY_API_KEY from "./env"
// import ColorMindSearch from "./ColorMindSearch";

// export const callAPI = () =>
//   fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo`)
//     .then(response => response.json()) 
//     .then(data => {
//         console.log(data.result);
//     })
// export default callAPI; 








// import React, {Component} from "react";
// import API from "../../utils/API";
// import Button from "../Button";


// class ColorMind extends Component {
//     state = {
//         colors: [],
//         colormind: ""
//     };
//     handleInputChange = event => {
//         // Destructure the name and value properties off of event.target
//         // Update the appropriate state
//         const { name, value } = event.target;
//         this.setState({
//         [name]: value
//         });
//     };
//     handleFormSubmit = event => {
//         event.preventDefault();
//         console.log("COLORSEARCH COMPONENT");
//         API.getColorMind(this.state.colormind)
//         .then(res => {
//             console.log("API.GETCOLORMIND IN COLORSEARCH COMPONENT");
//             console.log(res.data); 
//             this.setState({ colors: res.data })
//         })
//         .catch(err => console.log(err));
//     };
//       render() {
//         return(
//             <div className="colormind">
//                 <h2>Color Generator</h2>
//                       <Button
//                         onClick={this.handleFormSubmit}
//                         type="success"
//                         className="input-lg"
//                       >
//                         Color Generator
//                       </Button>
//             </div>
//         )
//       }
// }

// export default ColorMind;