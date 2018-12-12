var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BrandInfo = new Schema({
  // `title` is required and of type String
  company_name: {
    type: String,
    required: true
  },
  company_type: {
    type:String,
    required:true
  },
  slogan: {
      type: String,
      required:false
  },
  // `link` is required and of type String
  website: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false
  },
  logo: {
    type: String,
    required: false
  },
  fb_url: {
    type:String,
    required: false
  },
  insta_url: {
    type:String,
    required: false
  },
  twitter_url: {
    type:String,
    required: false
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Brand with an associated Note
  extra_photo: {
    type: Schema.Types.ObjectId,
    ref: "Photos"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Brand = mongoose.model("Brand", BrandInfo);

// Export the Brand model
module.exports = Brand;