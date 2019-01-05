// =================================== COLORMIND SEARCH ===================================================
import React, {Component} from "react";

class ColorMindSearch extends Component {
    state = {
        color: [],
    };

    rgbToHex(color){
        return "#" +
         ("0" + parseInt(color[0]).toString(16)).slice(-2) +
         ("0" + parseInt(color[1]).toString(16)).slice(-2) +
         ("0" + parseInt(color[2]).toString(16)).slice(-2);
       }
    callAPI = () => {
        return fetch(`http://colormind.io/api/`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify({model : "default"}) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
    }

    setColor = () => {
        this.callAPI().then(data => this.setState({color: data.result}))
    }
      render() {
        return(
          <div className="App">
  
              <div className="searches">
              <h2>Color Generator</h2>
                  <button 
                    type="submit" 
                    id="pixabay_submit"
                    className="btn"
                    //onClick={this.handleClick}>
                    onClick={this.setColor}>
                      New Palette
                  </button>
              </div>
              <div className="all_pixabay_results">
                
                    {this.state.color.map(colors => (
                        <div key={colors} style={{ background: "rgb(" + colors + ")", padding: 10 }}
                        >
                          <p id={colors}>rgb({colors.toString()})</p>
                        </div>
                    ))}
            </div>
        </div>
        )
      }
}

export default ColorMindSearch;