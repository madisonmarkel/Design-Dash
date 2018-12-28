// =================================== PIXABAY SEARCH ===================================================

//https://reactjs.org/docs/handling-events.html
//https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
//https://stackoverflow.com/questions/43756852/call-external-api-on-button-click-and-then-render-a-child-component-with-the-api
// https://reactjs.org/docs/faq-ajax.html

import React, {Component} from "react";
import API from "../../utils/API";
import Input from "../Input";
import Button from "../Button"

//import callAPI from "./PixabayAPI";
//import REACT_APP_PIXABAY_API_KEY from "../../env"
//const REACT_APP_PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;


class PixabaySearch extends Component {
    // constructor() {
    //     //super = pass any props from the parent to the child component.
    //     super();
    //     //When you set the initial state, you want to set it as empty, or blank.
    //     this.state = {
    //         pixabaySearch: [],
    //     }
    //     // This binding is necessary to make `this` work in the callback
    //     //this.handleClick = this.handleClick.bind(this);
    //   }
        state = {
            pictures: [],
            pixabaySearch: ""
        };
        handleInputChange = event => {
          // Destructure the name and value properties off of event.target
          // Update the appropriate state
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
        };
        handleFormSubmit = event => {
          // When the form is submitted, prevent its default behavior, get recipes update the recipes state
          event.preventDefault();
          API.getPixabayImages(this.state.pixabaySearch)
            .then(res => {
              console.log(res); 
              this.setState({ pictures: res.data.hits })
            })
            .catch(err => console.log(err));
        };

    //   callAPI = () =>
    //         //NEED TO HIDE API KEYS
    //     //fetch(`https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${PixabaySearch.value}&image_type=photo`)
        
    //     fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo`)
    //         .then(response => response.json()) 
    //         .then(data => {
    //             //console.log(REACT_APP_PIXABAY_API_KEY);
    //             console.log(data.hits);
    //             this.setState( {
    //                 pictures:data.hits
    //             });
    //     })

    //   handleClick = () => {
    //     console.log('this is:', this);
    //     this.callAPI();
    //   }

      render() {
        //const { pixabaySearch } = this.state;
        return(
            <div className="pixabay">
                <h2>Search for Images</h2>
                <Input
                        name="pixabaySearch"
                        value={this.state.pixabaySearch}
                        onChange={this.handleInputChange}
                        className="pixabaySearch"
                      />
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                  {/* <input
                    id="pixabay_user_input"
                    type="text"
                    value={this.state.pixabaySearch}
                    onChange={this.handleInputChange}
                    // onChange={e => this.setState({ post: e.target.value })}
                  />
                  <button 
                    type="submit" 
                    id="pixabay_submit"
                    onClick={this.handleFormSubmit}>
                      Search
                  </button> */}

                <div className="all_pixabay_results">
                    {this.state.pictures.map(picture => (
                        <img 
                        src={picture.previewURL} 
                        alt={picture.tags} 
                        id={picture.id} 
                        key={picture.id} 
                        className="pixabay_results"/>
                        
                    ))}
                </div>
            </div>
        )
      }
}

export default PixabaySearch;