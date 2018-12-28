const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  slogan: String,
  logo: String,
  colors: String,
  images: String,
  date: { type: Date, default: Date.now }
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
