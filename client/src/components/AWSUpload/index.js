// https://medium.com/@fabianopb/upload-files-with-node-and-react-to-aws-s3-in-3-steps-fdaa8581f2bd

import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response);
      // handle your response;
    }).catch(error => {
      console.log(error);
      // handle your error
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  render () {
    return (
    <div className="app">
        <h2>Photo Storage</h2>
            <form onSubmit={this.submitFile}>
                <input label='upload file' type='file' onChange={this.handleFileUpload} />
                <br/>
                <button type='submit' className="btn">Send</button>
            </form>
    </div>
    );
  }
}

export default FileUpload;