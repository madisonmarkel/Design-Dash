require("dotenv").config();
const router = require("express").Router();

const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const SECRET_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
    
    //SHOULD MATCH WITH /aws IN ROUTES / API /INDEX.js
    router.get("/", (req, res) => {
        var AWS = require('aws-sdk');
        AWS.config.update(
            {
                accessKeyId: ACCESS_KEY,
                secretAccessKey: SECRET_KEY,
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
                res.send(data)
                // this.setState({file: data.Contents})
            }
        });
       });
      module.exports = router;
    