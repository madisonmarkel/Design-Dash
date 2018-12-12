var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new PhotoSchema object
// This is similar to a Sequelize model
var PhotoSchema = new Schema({
  // `title` is of type String
  link: String,
});

// This creates our model from the above schema, using mongoose's model method
var Photo = mongoose.model("Photos", PhotoSchema);

// Export the Note model
module.exports = Photo;