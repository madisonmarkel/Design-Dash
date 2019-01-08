const router = require("express").Router();
const brandRoutes = require("./brands");
const pixabayRoutes = require("./pixabay");
const userRoutes = require("./users");
const awsRoutes = require("./aws");

// Book routes
router.use("/brands", brandRoutes);
router.use("/pixabay", pixabayRoutes);
router.use("/users", userRoutes);
router.use("/aws", awsRoutes);

module.exports = router;
