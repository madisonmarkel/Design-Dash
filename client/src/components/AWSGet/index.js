import React, { Component } from 'react';
// import axios from 'axios';

class FileDownload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  componentDidMount() {
    var AWS = require('aws-sdk');
    AWS.config.update(
        {
        accessKeyId: "AKIAINNLDQMCCB2AKJSQ",
        secretAccessKey: "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",
        region: 'us-west-2'
        }
    );
    var s3 = new AWS.S3();
    var params = {
        Bucket: "designdash", 
        MaxKeys: 10000,
       };
       s3.listObjects(params, function(err, data) {
         if (err) console.log(err, err.stack); // an error occurred
         else {
            console.log(data); 
            // this.setState({file: data.Contents})
         }
    });
        // var AWS = require('aws-sdk');
        // AWS.config.update(
        //   {
        //     accessKeyId: "AKIAINNLDQMCCB2AKJSQ",
        //     secretAccessKey: "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",
        //     region: 'us-west-2'
        //   }
        // );
        // var s3 = new AWS.S3();
        // var params = {
        //     Bucket: "designdash", 
        //     Key: "bucketFolder/pup.png"
        // };
        // s3.getObject(params, function(err, data) {
        //     if (err) console.log(err, err.stack); // an error occurred
        //     else     console.log(data); 
        // });
//========================= attempt to send to backside
    // axios.get(`/test-show`, {
    //     headers: {
    //       'Access-Control-Allow-Origin': true,
    //     }
    //   }).then(response => {
    //       console.log(response)
    //     // handle your response;
    //   }).catch(error => {
    //     alert("Failed to retrieve an object: " + error);
    //     // handle your error
    //   });
    // }
  
    // handleFileUpload = (event) => {
    //   this.setState({file: event.target.files});
    // }
//========================= below kinda works but getting a network error
    // var AWS = require('aws-sdk');
    // AWS.config.update(
    //   {
    //     accessKeyId: "AKIAINNLDQMCCB2AKJSQ",
    //     secretAccessKey: "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",
    //     region: 'us-west-2'
    //   }
    // );
    // var s3 = new AWS.S3();
    // s3.getObject(
    //   { Bucket: "designdash", Key: "bucketFolder/1546821014297-lg.png" },
    //   function (error, data) {
    //     if (error != null) {
    //       alert("Failed to retrieve an object: " + error);
    //     } else {
    //     //   setState({file: data.ContentLength})
    //       alert("Loaded " + data.Body + " bytes");
    //       console.log(data);
    //       console.log(data.Body);
    //       // do something with data.Body
    //     }
    //   }
    // );
  }

  render () {
    return (
    <div className="app">
        <h2>Saved Photos</h2>
        <div className="photo_storage_results">
            {/* {this.state.file.map(files => (
                // <div ref={picture.webformatURL}>
                <a href={files} key={files}>
                    <img 
                    src={files} 
                    alt={files} 
                    id="awsFile" 
                    key={files} 
                    value={files} 
                    className="awsFiles"/>
                </a>
            ))} */}
        </div>
    </div>
    );
  }
}

export default FileDownload;