const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/designdash1"
);

// BRANDS
const brandSeed = [
  {
    name: "Lawgical",
    industry: "Online Marketing",
    slogan:
      "Legal products with Trust",
    date: new Date(Date.now())
  },
  {
    name: "CourtFiling.net",
    industry: "Legal",
    slogan:
      "Easy eFiling",
    date: new Date(Date.now())
  }
];

db.Brand
  .remove({})
  .then(() => db.Brand.collection.insertMany(brandSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// USERS
  const userSeed = [
    {
      email: "madisonmarkel@gmail.com",
      password: "password",
    },
    {
      email: "test@gmail.com",
      password: "test",
    }
  ];
  
  db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });