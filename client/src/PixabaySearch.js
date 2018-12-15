//https://reactjs.org/docs/handling-events.html
//https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

import React, {Component} from "react";
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
  
    handleClick() {
        fetch('https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>
                        <img src={pic.picture.medium} />
                    </div>
                )
            })
            //set the new state to the data that we’ve pulled
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
      }

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