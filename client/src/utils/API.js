import axios from "axios";

export default {
  // Gets all brands
  getBrands: function() {
    return axios.get("/api/brands");
  },
  // Gets the brand with the given id
  getBrand: function(id) {
    return axios.get("/api/brands/" + id);
  },
  // Deletes the brand with the given id
  deleteBrand: function(id) {
    return axios.delete("/api/brands/" + id);
  },
  // Saves a brand to the database
  saveBrand: function(brandData) {
    return axios.post("/api/brands", brandData);
  },
  getPixabayImages: function(query) {
    console.log("SRC/UTILS/API GETPIXABAYIMAGES FUNCTION ROUTE");
    return axios.get("/api/pixabay", { params: { q: query } });
  }
};