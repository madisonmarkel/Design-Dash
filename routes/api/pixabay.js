require("dotenv").config();

const axios = require("axios");
const router = require("express").Router();

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

//SHOULD MATCH WITH /PIXABAY IN ROUTES / API /INDEX.js
router.get("/", (req, res) => {
    console.log("PIXABAY.JS IN ROUTES / API")
    console.log(PIXABAY_API_KEY);
    axios.get("www.https://pixabay.com/api/?key="+ PIXABAY_API_KEY + "&image_type=photo&q=", { params: req.query })
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
