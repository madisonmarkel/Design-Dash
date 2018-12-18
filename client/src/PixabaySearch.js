import React, {Component} from "react";
//import callAPI from "./PixabayAPI";

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
      callAPI = () =>
            //NEED TO HIDE API KEYS
        //fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${PixabaySearch.value}&image_type=photo`)
        
        fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo`)
            .then(response => response.json()) 
            .then(data => {
                console.log(data.hits);
                this.setState( {
                    pictures:data.hits
                });
        })

        // makeRequest = (pictures) => {
        //     callAPI(pictures)
        //         .then(function(data) {
        //             this.setState(function (){
        //                 return{
        //                     pictures:data
        //                 }
        //             })
        //         }.bind(this));
        // }

      handleClick = () => {
        console.log('this is:', this);
        this.callAPI();
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
                <div>
                    {pictures.map(picture => (
                        <img src={picture.previewURL} alt={picture.tags} id={picture.id} class="pixabay_results"/>
                        
                    ))}
                    {/* {pictures.map(picture => (
                        <img src={picture.hits.previewURL} alt="searchimages"/>
                    ))} */}
                </div>
            </div>
        )
      }
}

export default PixabaySearch;