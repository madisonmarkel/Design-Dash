import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ColorMindSearch from "../components/ColorSearch"
//import callAPI from "./PixabayAPI";

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

//     constructor() {
//         //super = pass any props from the parent to the child component.
//         super();
//         //When you set the initial state, you want to set it as empty, or blank.
//         this.state = {
//             color: [],
//         }
//     }

//     rgbToHex(rgb){
//         return "#" +
//          ("0" + parseInt(rgb[0]).toString(16)).slice(-2) +
//          ("0" + parseInt(rgb[1]).toString(16)).slice(-2) +
//          ("0" + parseInt(rgb[2]).toString(16)).slice(-2);
//        }

//     callAPI = (req, res) => {
//         postData(`http://colormind.io/api/`)
//             .then(response => {
//                 console.log(response.data);
//                 return response.data;
//             })
//             .then(data => {
//                 //console.log(REACT_APP_PIXABAY_API_KEY);
//                 console.log(data);
//                 res.send(data);
//             }).catch(err => (console.log(err)))

//             // .then(data => (console.log(data)))
//             // .then(data => (console.log(JSON.stringify(data))))
//             // .then(
//             //     // data => (console.log(JSON.stringify(data))), 
//             //     // data => (JSON.stringify(data)), 
//             //     data => this.setState(data), 
//             //     // data => (console.log(JSON.parse(data.responseText).result))
//             // )
//             // .then(data => this.setState(data))
//             // .then(data => (console.log(data)))
//             .catch(error => console.error(error));

//             function postData(url = ``, data = {model : "default"}) 
//                 {
//                 // Default options are marked with *
//                 return fetch(url, {
//                     method: "POST", // *GET, POST, PUT, DELETE, etc.
//                     mode: "cors", // no-cors, cors, *same-origin
//                     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//                     credentials: "same-origin", // include, *same-origin, omit
//                     // headers: {
//                     //     "Content-Type": "application/json",
//                     //     // "Content-Type": "application/x-www-form-urlencoded",
//                     // },
//                     redirect: "follow", // manual, *follow, error
//                     referrer: "no-referrer", // no-referrer, *client
//                     body: JSON.stringify(data), // body data type must match "Content-Type" header
//                 })
//                 .then(response => response.json()); // parses response to JSON
//             }
//         console.log(this.state);
//     }

// // ==============================================================================
//     //   callAPI = (data, group, button) =>{
// 	// 	var http = new XMLHttpRequest();
// 	// 	var url = "http://colormind.io/api/";
// 	// 	var data = {
//     //         model : "default",
//     //         input : [[44,43,44],[90,83,82],"N","N","N"]
//     //     }
//     //     console.log(this)
//     //     console.log(this.state);
//     //     console.log(http);
//     //     // console.log(this.state.color);
//     //     http.onreadystatechange = function(res) {
//     //         if(http.readyState == 4 && http.status == 200) {
//     //             var palette = JSON.parse(http.responseText).result;
//     //             console.log(palette);
//     //         } else {
//     //             console.error(http.statusText);
//     //         }
//     //     }        
//     //     http.open("POST", url, true);
//     //     http.onload = function (e) {
//     //         if (http.readyState === 4) {
//     //             if (http.status === 200) {
//     //             var json_obj = JSON.parse(http.responseText).result;
//     //             this.setState( json_obj );
//     //             console.log(json_obj);
//     //             return json_obj;
//     //             //console.log(json_obj);
//     //             } else {
//     //             console.error(http.statusText);
//     //             }
//     //         }
//     //         }.bind(this);
//     //         http.onerror = function (e) {
//     //         console.error(http.statusText);
//     //         };
//     //     http.send(JSON.stringify(data));
//     // }
// // ==============================================================================


//     //   callAPI = () =>
//     //     fetch(`http://colormind.io/api/`)
//     //         //.then(response => response.json()) 
//     //         .then(data => {
//     //             console.log(data);
//     //             this.setState( {
//     //                 color:data
//     //             });
//     //     })
//     //   handleClick = () => {
//     //     console.log('this is:', this);
//     //     this.callAPI();
//     //   }

//       render() {
//         //const { color } = this.state;
//         return(
//           <div className="App">
//           <header className="App-header">
//             <Header/>
//           </header>
//           <div className="main_app">
//               <Navigation/>
  
//               <div className="searches">
//               <h2>Color Generator</h2>
//                   <button 
//                     type="submit" 
//                     id="pixabay_submit"
//                     className="btn"
//                     //onClick={this.handleClick}>
//                     onClick={this.callAPI}>
//                       Generate Colors
//                   </button>
//               </div>
//               <div className="all_pixabay_results">
                
//                     {this.state.color.map(colors => (
//                         <div //style={{ background: this.state.colors, padding: 10 }}
//                         >
//                           <p id={colors.result}>Color</p>
//                         </div>
//                     ))}
//                     {/* {this.state.map(colors => (
//                         <div //style={{ background: this.state.colors, padding: 10 }}
//                         >
//                           <p id={colors}>Color</p>
//                         </div>
//                     ))} */}
//                 </div>
//             </div>
//         </div>
//         )
//       }