// const axios = require("axios");
// const router = require("express").Router();

// router.get("/pixabay", (req, res) => {
//   axios
//     .get("https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=", { params: req.query }), "&image_type=photo"
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// module.exports = router;

const axios = require("axios");
const router = require("express").Router();

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
console.log(API_KEY);

//SHOULD MATCH WITH /PIXABAY IN ROUTES / API /INDEX.js
router.get("/", (req, res) => {
    console.log("PIXABAY.JS IN ROUTES / API")
    console.log(API_KEY);
    axios.get("www.https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&image_type=photo&q=", { params: req.query })
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .then(data => {
        //console.log(REACT_APP_PIXABAY_API_KEY);
        console.log(data.hits);
        res.send(data);
    }).catch(err => (console.log(err)))
   });
  module.exports = router;
