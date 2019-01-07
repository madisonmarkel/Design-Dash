//https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

//AWS
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
// const s3 = new aws.S3();
let cors = require('cors');

// //OKTA USER AUTH
const OktaJwtVerifier = require('@okta/jwt-verifier');

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//=================================================================================================================

// // OKTA USER AUTH
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-687371.oktapreview.com',
  clientId: '0oainhuo94dnScBmE0h7',
  assertClaims: {
    aud: 'api://default',
  },
});
/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}
/**
 * For local testing only!  Enables CORS for all domains
 */
// app.use(cors());

/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
app.get('/secure', authenticationRequired, (req, res) => {
  res.json(req.jwt);
});

/**
 * Another example route that requires a valid access token for authentication, and
 * print some messages for the user if they are authenticated
 */
app.get('/api/messages', authenticationRequired, (req, res) => {
  res.json([{
    message: 'Hello, word!'
  }]);
});

//=================================================================================================================
// ============================================ AWS
// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: "AKIAINNLDQMCCB2AKJSQ",
  secretAccessKey: "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",
  // accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  // secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    // Bucket: process.env.REACT_APP_S3_BUCKET,
    Bucket: "designdash",
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};

// Define POST route
app.post('/test-upload', (request, response) => {
  const form = new multiparty.Form();
    form.parse(request, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timestamp = Date.now().toString();
        const fileName = `bucketFolder/${timestamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        return response.status(200).send(data);
      } catch (error) {
        return response.status(400).send(error);
      }
    });
});

// // NEED TO DEFINE AWS GET POST FOR AWSGET INDEX.JS FILE FOR BACKEND INSTEAD OF FRONTEND
// app.get('/test-show', (request, response) => {
//   AWS.config.update(
//       {
//       accessKeyId: "AKIAINNLDQMCCB2AKJSQ",
//       secretAccessKey: "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",
//       // region: 'us-west-2'
//     }
//   );
//   var s3 = new AWS.S3();
//   s3.getObject(
//     { Bucket: "designdash", Key: "bucketFolder/1546821014297-lg.png" },
//     function (error, data) {
//       if (error != null) {
//         alert("Failed to retrieve an object: " + error);
//       } else {
//       //   setState({file: data.ContentLength})
//         alert("Loaded " + data.ContentLength + " bytes");
//         // do something with data.Body
//       }
//     }
//   );
// });

//=================================================================================================================

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/designdash1", function(err) {
  if (err) throw err;
  console.log("connected to db");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});