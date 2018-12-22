const axios = require("axios");
const router = require("express").Router();

//SHOULD MATCH WITH /PIXABAY IN ROUTES / API /INDEX.js
router.get("/", (req, res) => {
    console.log("PIXABAY.JS IN ROUTES / API")
    // fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo`)
    //         .then(response => response.json()) 
    //         .then(data => {
    //             //console.log(REACT_APP_PIXABAY_API_KEY);
    //             console.log(data.hits);
    //             this.setState( {
    //                 pictures:data.hits
    //             });
    //     })
    axios
      .get("https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo")
      //.get("http://www.https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=", { params: req.query }, "&image_type=photo")
    //   .then(({ data: { results } }) => {console.log("AXOIS API CALL" + results), res.json(results)})
    //   .catch(err => res.status(422).json(err));
    //.then(response => response.json()) 
    //.then(response => response.json()) 
        .then(data => {
        //.then(data => res.json(data));
            //console.log(REACT_APP_PIXABAY_API_KEY);
            console.log(data.hits);
            //res.send(data)
            //on client side, then do this.setState in client
            this.setState( {
                pictures:data.hits
            });
  });
});
  
  module.exports = router;
  