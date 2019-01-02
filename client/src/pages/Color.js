import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
//import callAPI from "./PixabayAPI";

// class ColorMindSearch extends React.Component {
//     state = {}
  
//     componentDidMount() {
//       var http = new XMLHttpRequest();
//       var json_obj, status = false;
//       http.open("GET", "http://colormind.io/api/", true);
//       http.onload = function (e) {
//         if (http.readyState === 4) {
//           if (http.status === 200) {
//             var json_obj = JSON.parse(http.responseText).result;
//             status = true;
//             this.setState({ json_obj });
//           } else {
//             console.error(http.statusText);
//           }
//         }
//       }.bind(this);
//       http.onerror = function (e) {
//         console.error(http.statusText);
//       };
//       http.send(null);
//     }
  
//     render() {
//       return (
//         <div className="App">
//         <img alt="dunno" src= {this.state.json_obj ?  this.state.json_obj[0].url : 'loading...'}></img>
//            <header className="App-header">
//              <Header/>
//            </header>
//            <div className="main_app">
//                <Navigation/>
          
//                <div className="searches">
//                <h2>Color Generator</h2>
//                    <button 
//                      type="submit" 
//                      id="pixabay_submit"
//                      className="btn"
//                         onClick={this.handleClick}>
//                      {/* onClick={this.callAPI}> */}
//                        Generate Colors
//                    </button>
//                </div>
//                <div className="all_pixabay_results">
//                      {/* {this.state.color.map(colors => (
//                          <div style={{ background: this.state.colors, padding: 10 }}>
//                            <p>Color</p>
//                          </div>
//                      ))} */}
//                  </div>
//              </div>
//          </div>
//       );
//     }
//   }
//   export default ColorMindSearch;

class ColorMindSearch extends Component {
    constructor() {
        //super = pass any props from the parent to the child component.
        super();
        //When you set the initial state, you want to set it as empty, or blank.
        this.state = {
            color: [],
            // data: {
            //   model : "default",
            //   input : [[44,43,44],[90,83,82],"N","N","N"]
            // }
        }
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
      }

      callAPI = (data, group, button) =>{
		var http = new XMLHttpRequest();
		var url = "http://colormind.io/api/";
		var data = {
            model : "default",
            input : [[44,43,44],[90,83,82],"N","N","N"]
        }
        http.onreadystatechange = function(res) {
            if(http.readyState == 4 && http.status == 200) {
                var palette = JSON.parse(http.responseText).result;
                console.log(palette);
                // this.setState({ color: palette });
            } else {
                console.error(http.statusText);
                // res.send(palette);
                // color:palette;
                //http.send(JSON.stringify(palette));
            }
        }        

        http.open("POST", url, true);
            console.log(http);
            http.send(JSON.stringify(data));
            console.log(data);

        http.onload = function (e) {
            if (http.readyState === 4) {
                if (http.status === 200) {
                var json_obj = JSON.parse(http.responseText);
                console.log(json_obj);
                //status = true;
                this.setState({ json_obj });
                } else {
                console.error(http.statusText);
                }
            }
            }.bind(this);
            http.onerror = function (e) {
            console.error(http.statusText);
            };
        // var palette = JSON.parse(http.responseText).result;
        // console.log(palette);

		// http.onreadystatechange = function() {
			
		// 	if(http.readyState == 4 && http.status == 200) {
		// 		if(button){
		// 			setTimeout(function(){
		// 			button.className = 'btn btn-default randomize';
		// 			}, 500);
		// 		}
		// 		var palette = JSON.parse(http.responseText).result;
		// 		if(palette.length != 5){
		// 			return false;
		// 		}
				
		// 		colors_palette = palette;
				
		// 		var h3 = document.querySelectorAll('#'+group.getAttribute('id')+' h3');
		// 		var groupcolors = document.querySelectorAll('#'+group.getAttribute('id')+' .color');
		// 		for(var k = 0; k<groupcolors.length; k++){
		// 			var color = groupcolors[k];
		// 			if(color.getAttribute('data-locked') == 'false'){
		// 				var hex = rgbToHex(palette[k]);
		// 				color.setAttribute('data-color', hex);
						
		// 				h3[k].innerText = hex.substring(1).toUpperCase();
						
		// 				var swipe = color.getElementsByClassName("swipe")[0];
		// 				var width = color.clientWidth;
						
		// 				swipe.className == 'swipe';
		// 				swipe.setAttribute('style', 'border-top: '+width+'px solid '+hex+'; border-left: '+width+'px solid '+hex+'; border-bottom: '+width+'px solid transparent; border-right: '+width+'px solid transparent;');
						
		// 				setTimeout(function(){
		// 					var hex = this.getAttribute('data-color');
		// 					this.setAttribute('style', 'background-color: ' + hex);
		// 					var swipe = this.getElementsByClassName("swipe")[0];
		// 					swipe.removeAttribute('style');
		// 				}.bind(color), 1000);
		// 			}
		// 		}
                // if(group.getAttribute('id') == 'colors'){
				//     var m;
				//     var class1 = document.querySelectorAll('svg .color1');
				//     for(m=0; m<class1.length; m++){
				//         class1[m].style.fill = rgbToHex(palette[0]);
				//     }
				//     var class2 = document.querySelectorAll('svg .color2');
				//     for(m=0; m<class2.length; m++){
				//         class2[m].style.fill = rgbToHex(palette[1]);
				//     }
				//     var class3 = document.querySelectorAll('svg .color3');
				//     for(m=0; m<class3.length; m++){
				//         class3[m].style.fill = rgbToHex(palette[2]);
				//     }
				// }
				
				// var sponsor = document.getElementById('sponsor');
				// if(sponsor && sponsor.className == group.getAttribute('id')){
				// 	sponsor.style.backgroundColor = rgbToHex(palette[0]);
				// }
				
				// // call iframe functions if any exist
				// var iframe = document.getElementById('subwindow');
				
				// if(!iframe){
				// 	return;
				// }		
					
				// if(iframe.contentWindow.setPalette){
				// 	iframe.contentWindow.setPalette(window.colors_palette);
				// }
				// else{
				// 	iframe.onload = function(){
				// 		iframe.contentWindow.setPalette(window.colors_palette);
				// 	};
				// }
				
			// }
		// }
		
		//http.send(JSON.stringify(data));
    }

    //   callAPI = () =>
    //     fetch(`http://colormind.io/api/`)
    //         //.then(response => response.json()) 
    //         .then(data => {
    //             console.log(data);
    //             this.setState( {
    //                 color:data
    //             });
    //     })
    //   handleClick = () => {
    //     console.log('this is:', this);
    //     this.callAPI();
    //   }

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
                    //onClick={this.handleClick}>
                    onClick={this.callAPI}>
                      Generate Colors
                  </button>
              </div>
              <div className="all_pixabay_results">
                    {/* {this.state.color.map(colors => (
                        <div style={{ background: this.state.colors, padding: 10 }}>
                          <p>Color</p>
                        </div>
                    ))} */}
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