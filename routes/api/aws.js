require("dotenv").config();
const router = require("express").Router();

const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const SECRET_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const BUCKET = process.env.REACT_APP_S3_BUCKET
    
    //SHOULD MATCH WITH /aws IN ROUTES / API /INDEX.js
    router.get("/", (req, res) => {
        var AWS = require('aws-sdk');
        AWS.config.update(
            {
                accessKeyId: ACCESS_KEY,
                secretAccessKey: SECRET_KEY,
                region: 'us-west-2'
            }
            // {
            // accessKeyId: "AKIAINNLDQMCCB2AKJSQ",
            // secretAccessKey: "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",
            // region: 'us-west-2'
            // }
        );
        var s3 = new AWS.S3();
        var params = {
            Bucket: BUCKET, 
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

        // console.log("PIXABAY.JS IN ROUTES / API")
        // console.log(API_KEY);
        // axios.get("www.https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&image_type=photo&q=", { params: req.query })
        // .then(response => {
        //     console.log(response.data);
        //     return response.data;
        // })
        // .then(data => {
        //     //console.log(REACT_APP_PIXABAY_API_KEY);
        //     console.log(data.hits);
        //     res.send(data);
        // }).catch(err => (console.log(err)))
       });
      module.exports = router;
    