// TRY AXIOS CALL FOR API

//import React from "react";
import PIXABAY_API_KEY from "./env"
import PixabaySearch from "./PixabaySearch"

//const PixabayAPI = 'https://pixabay.com/api/?key=" + userInput + "&image_type=photo"';
//https://pixabay.com/api/?key=KEY=yellow+flowers&image_type=photo

//NEED TO ADD DYNAMIC USER INPUT

export const callAPI = () =>
    //NEED TO HIDE API KEYS
  //fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${PixabaySearch.value}&image_type=photo`)
  
  fetch(`https://pixabay.com/api/?key=10973637-11d4c82c5cd38dd84074bb946&q=yellow+flowers&image_type=photo`)
    .then(
        res => res.json()
    .then(data => data.results)
    .then(console.log("PIXABAYAPI.JS CONSOLE"))
    .then(console.log(res))
    )

// export const search = query =>
//   fetch(`${PixabayAPI}search/photos?query=${query}&client_id=${process.env.PIXABAY_API_KEY}`)
//     .then(res => res.json())
//     .then(data => data.results);

//export default PixabayAPI;
export default callAPI;