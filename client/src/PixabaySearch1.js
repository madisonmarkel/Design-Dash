//https://reactjs.org/docs/handling-events.html
//https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
//https://stackoverflow.com/questions/43756852/call-external-api-on-button-click-and-then-render-a-child-component-with-the-api
// https://reactjs.org/docs/faq-ajax.html

import React, {Component} from "react";
// import PixabayAPI, { callAPI } from "./PixabayAPI";
// import PixabayAPI from "./PixabayAPI";
//import callAPI from "./PixabayAPI";
// import "./Status.css";

// STATEFUL 

class PixabaySearch extends Component {
    constructor() {
        //super = pass any props from the parent to the child component.
        super();
        //When you set the initial state, you want to set it as empty, or blank.
        this.state = {
            pictures: [],
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
// WORK(ISH)
        // makeRequest = (pictures) => {
        //     callAPI(pictures)
        //         .then(function(res) {
        //             this.setState(function (){
        //                 return{
        //                     pictures:res
        //                 }
        //             })
        //         }.bind(this));
        // }

        // handleClick() {
        // //componentDidMount(){
        //     this.makeRequest(this.state.pictures)
        // }

        // setPhotos = (myPhotos) =>{
        //     this.setState(function () {
        //         // console.log("MYPHOTOS" + myPhotos)
        //         return{
        //             pictures:myPhotos
        //         }
        //     })
        // }

//OPTION 2 BUT MAP ISN'T WORKING
    handleClick() {
        //fetch('https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo')
        //fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=${value}&image_type=photo`)
        fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow&image_type=photo`)
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results;
            // let pictures = data.results.map((pics) => {
            //     return (
            //         <div key={pics.results}>
            //             <img alt={pics.hits.tags} src={pics.hits.previewURL} />
            //         </div>
            //     )
            // })
            //set the new state to the data that we’ve pulled
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
      }

    render() {
        const { pictures } = this.state;
        return(
        <div className="pixabay">
                <h2>Search for Images</h2>
                  <input
                    id="pixabay_user_input"
                    type="text"
                    value={this.state.post}
                    // onChange={e => this.setState({ post: e.target.value })}
                  />
                  <button 
                    type="submit" 
                    id="pixabay_submit"
                    onClick={this.handleClick}>
                      Search
                  </button>
                
                <ul>
                    {pictures.map(picture => (
                        <li key={picture.hits.previewURL}>
                        <img src={picture.hits.previewURL} alt="searchimages"/>
                    </li>
                    ))}
                </ul>
                
            </div> 
        );
    }
}

export default PixabaySearch;


// class PixabaySearch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             pictures: []
//         };
//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//       }
    
//        handleClick() {
//         fetch("https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo")
//           .then(res => res.json())
//           .then(
//             (result) => {
//               this.setState({
//                 isLoaded: true,
//                 pictures: result.pictures,
//               });
//             },
//             // Note: it's important to handle errors here
//             // instead of a catch() block so that we don't swallow
//             // exceptions from actual bugs in components.
//             (error) => {
//               this.setState({
//                 isLoaded: true,
//                 error
//               });
//             }
//           )
//       }

// render() {
//     const { pictures } = this.state;
//     return(
//     //   <li 
//     //     id={`${this.state.message}`}
//     //   >
//     //     {this.renderMessage()}
//     //   </li> 
//     <div className="pixabay">
//             <h2>Search for Images</h2>
//               <input
//                 id="pixabay_user_input"
//                 type="text"
//                 value={this.state.post}
//                 // onChange={e => this.setState({ post: e.target.value })}
//               />
//               <button 
//                 type="submit" 
//                 id="pixabay_submit"
//                 onClick={this.handleClick}>
//                   Search
//               </button>
//               {/* <p>Help {this.state.myPhotos}</p> */}
//               <ul>
//                 {/* {pictures.map(picture => ( */}
//             <li key={pictures.hits.previewURL}>
//               {pictures.hits.previewURL}
//             </li>
//           )}
//         </ul>
//     </div> 
//     );
// }
// }

//export default PixabaySearch;