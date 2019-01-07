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
          event.preventDefault();
          API.getPixabayImages(this.state.pixabaySearch)
            .then(res => {
              console.log(res); 
              this.setState({ pictures: res.data.hits })
            })
            .catch(err => console.log(err));
        };
        

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

                <div className="all_pixabay_results">
                    {this.state.pictures.map(picture => (
                      // <div ref={picture.webformatURL}>
                        <a href={picture.webformatURL} key={picture.id}>
                          <img 
                          src={picture.previewURL} 
                          alt={picture.tags} 
                          id="copyPhoto" 
                          key={picture.id} 
                          value={picture.webformatURL} 
                          // ref={(copyinfo) => this.copyInfo = copyinfo}
                          className="pixabay_results"/>
                        </a>
                      // </div>
                    ))}
                </div>
            </div>
        )
      }
}

export default PixabaySearch;