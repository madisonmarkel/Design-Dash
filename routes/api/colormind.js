

// var url = "http://colormind.io/api/";
// var data = {
// 	model : "default",
// 	input : [[44,43,44],[90,83,82],"N","N","N"]
// }

// var http = new XMLHttpRequest();

// http.onreadystatechange = function() {
// 	if(http.readyState == 4 && http.status == 200) {
// 		var palette = JSON.parse(http.responseText).result;
// 	}
// }

// http.open("POST", url, true);
// http.send(JSON.stringify(data));

// const axios = require("axios");
// const router = require("express").Router();

//SHOULD MATCH WITH /PIXABAY IN ROUTES / API /INDEX.js
// router.get("/", (req, res) => {
//     console.log("COLORMIND.JS IN ROUTES / API")
//     // axios.get("http://colormind.io/api/")
//     // .then(response => {
//     //     console.log(response);
//     //     return response;
//     // })
//     // .then(data => {
//     //     console.log(data);
//     //     res.send(data);
//     // }).catch(err => (console.log(err)))
//    });
//   module.exports = router;

// const axios = require("axios");
// const router = require("express").Router();

// //SHOULD MATCH WITH /PIXABAY IN ROUTES / API /INDEX.js
// router.get("/", (req, res) => {
//     console.log("PIXABAY.JS IN ROUTES / API")
//     axios.get("www.https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&image_type=photo&q=", { params: req.query })
//     .then(response => {
//         console.log(response.data);
//         return response.data;
//     })
//     .then(data => {
//         //console.log(REACT_APP_PIXABAY_API_KEY);
//         console.log(data.hits);
//         res.send(data);
//     }).catch(err => (console.log(err)))
//    });
//   module.exports = router;
