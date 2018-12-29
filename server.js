//https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

//OKTA USER AUTH
// const OktaJwtVerifier = require('@okta/jwt-verifier');
// var cors = require('cors');

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//=================================================================================================================

// // OKTA USER AUTH
// const oktaJwtVerifier = new OktaJwtVerifier({
//   issuer: 'https://dev-687371.oktapreview.com/oauth2/default',
//   clientId: '{clientId}',
//   assertClaims: {
//     aud: 'api://default',
//   },
// });
// /**
//  * A simple middleware that asserts valid access tokens and sends 401 responses
//  * if the token is not present or fails validation.  If the token is valid its
//  * contents are attached to req.jwt
//  */
// function authenticationRequired(req, res, next) {
//   const authHeader = req.headers.authorization || '';
//   const match = authHeader.match(/Bearer (.+)/);

//   if (!match) {
//     return res.status(401).end();
//   }

//   const accessToken = match[1];

//   return oktaJwtVerifier.verifyAccessToken(accessToken)
//     .then((jwt) => {
//       req.jwt = jwt;
//       next();
//     })
//     .catch((err) => {
//       res.status(401).send(err.message);
//     });
// }
// /**
//  * For local testing only!  Enables CORS for all domains
//  */
// app.use(cors());

// /**
//  * An example route that requires a valid access token for authentication, it
//  * will echo the contents of the access token if the middleware successfully
//  * validated the token.
//  */
// app.get('/secure', authenticationRequired, (req, res) => {
//   res.json(req.jwt);
// });

// /**
//  * Another example route that requires a valid access token for authentication, and
//  * print some messages for the user if they are authenticated
//  */
// app.get('/api/messages', authenticationRequired, (req, res) => {
//   res.json([{
//     message: 'Hello, word!'
//   }]);
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/designdash", function(err) {
  if (err) throw err;
  console.log("connected to db");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// app.get('/pixabay', (req, response) => {
//   //res.send({ express: 'Hello From Express' });
//   $( "#pixabay_submit" ).click(function() {
//     event.preventDefault();
//     var userInput = $("#pixabay_user_input").val().trim();

//     var queryURL = 'https://pixabay.com/api/?key="' + process.env.PIXABAY_API_KEY + "&q=" + userInput + '"&image_type=photo"';
//     $.ajax({
//         method: "GET",
//         url: queryURL,
//         data: {

//         }
//     }).then(function(response) {
//         console.log(response);
//         var results = response.data;

//         for (var i=0; i < results.length; i++) {
//         }
//     });
//   });
// });

// app.get('/', (req, res) => {
//   res.send(process.env.REACT_APP_PIXABAY_API_KEY);
// })

// app.get('/api/pixabay', (req, res) => {
    
// })
// //COLORMIND.IO: http://colormind.io/api-access/
// var url = "http://colormind.io/api/";
// var data = {
//   model: "default",
//   input: [
//     [44, 43, 44],
//     [90, 83, 82], "N", "N", "N"
//   ]
// }

// var http = new XMLHttpRequest();

// http.onreadystatechange = function () {
//   if (http.readyState == 4 && http.status == 200) {
//     var palette = JSON.parse(http.responseText).result;
//   }
// }

// http.open("POST", url, true);
// http.send(JSON.stringify(data));

// app.post('/brand', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));