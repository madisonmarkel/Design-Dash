// =================================== COLORMIND SEARCH ===================================================

//import React from "react";
//import PIXABAY_API_KEY from "./env"
import ColorMindSearch from "./ColorMindSearch";

export const callAPI = () =>
  fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo`)
    .then(response => response.json()) 
    .then(data => {
        console.log(data.result);
    })
export default callAPI; 








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