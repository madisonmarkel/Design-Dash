//https://reactjs.org/docs/handling-events.html
//https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

import React, {Component} from "react";
// import PixabayAPI, { callAPI } from "./PixabayAPI";
// import PixabayAPI from "./PixabayAPI";
import callAPI from "./PixabayAPI";
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
// WORK(ISH) ON DID MOUNT BUT WE WANT IT TO WORK ON A CLICK
        makeRequest = (pictures) => {
            callAPI(pictures)
                .then(function(res) {
                    this.setState(function (){
                        return{
                            pictures:res
                        }
                    })
                }.bind(this));
        }

        handleClick() {
        //componentDidMount(){
            this.makeRequest(this.state.pictures)
        }

        setPhotos = (myPhotos) =>{
            this.setState(function () {
                return{
                    pictures:myPhotos
                }
            })
        }


    // handleClick() {
    //     //fetch('https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo')
    //     fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo`)
    //     .then(results => {
    //         return results.json();
    //     }).then(data => {
    //         let pictures = data.results.map((pics) => {
    //             return (
    //                 <div key={pics.results}>
    //                     <img alt={pics.hits.tags} src={pics.hits.previewURL} />
    //                 </div>
    //             )
    //         })
    //         //set the new state to the data that we’ve pulled
    //         this.setState({pictures: pictures});
    //         console.log("state", this.state.pictures);
    //     })
    //   }

    render() {
        return(
        //   <li 
        //     id={`${this.state.message}`}
        //   >
        //     {this.renderMessage()}
        //   </li> 
        <div className="pixabay">
                <h2>Search for Images</h2>
                  <input
                    id="pixabay_user_input"
                    type="text"
                    value={this.state.post}
                    onChange={e => this.setState({ post: e.target.value })}
                  />
                  <button 
                    type="submit" 
                    id="pixabay_submit"
                    onClick={this.handleClick}>
                      Search
                  </button>
                  <p>{this.state.responseToPost}</p>
        </div> 
        );
    }
}

export default PixabaySearch;