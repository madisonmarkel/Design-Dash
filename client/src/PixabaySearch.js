import React, {Component} from "react";
import callAPI from "./PixabayAPI";

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

      handleClick = () => {
        console.log('this is:', this);
        this.makeRequest();
      }

      render() {
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
            </div>
        )
      }
}

export default PixabaySearch;