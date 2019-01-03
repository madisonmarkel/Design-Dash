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
  // Updates the brand with the given id
  updateBrand: function(id) {
    return axios.put("/api/brands/" + id)
    // return axios.put("/api/brands/" + id + "?name=" + brandData.name + "&industry=" + brandData.industry + "&slogan=" + brandData.slogan + "&logo=" + brandData.logo + "&mainColor=" + brandData.mainColor + "&supportingColor=" + brandData.supportingColor + "&images=" + brandData.images);
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
  },
};