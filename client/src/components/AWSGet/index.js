import React, { Component } from 'react';
import API from "../../utils/API";
// import axios from 'axios';

class FileDownload extends Component {
    state = {
        file: []
    };

    setThatState = (response) => {
        console.log(response);
        this.setState({ file: response.data.Contents }, 
        console.log(response.data.Contents))
    }
    componentDidMount() {
        API.getAWSFiles()
        // .then(res => {
        .then(response => {
            console.log(response.data.Contents);
            this.setThatState(response);
            return response;
        })
        .catch(err => console.log(err));
    }
  render () {
    return (
    <div className="app">
        <h2>Saved Photos</h2>
        <div className="photo_storage_results">
            {this.state.file.map(files => (
                // <div ref={picture.webformatURL}>
                <a href={"https://designdash.s3.amazonaws.com/"+ files.Key } key={files.Key} target="_blank" rel="noopener noreferrer">
                    <img 
                    src={"https://designdash.s3.amazonaws.com/"+ files.Key }
                    alt={files.Key} 
                    id={files.Key}
                    key={files.Key} 
                    value={files.Key} 
                    className="awsFiles"/>
                </a>
            ))}
        </div>
    </div>
    );
  }
}

export default FileDownload;