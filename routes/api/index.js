const router = require("express").Router();
const brandRoutes = require("./brands");
const pixabayRoutes = require("./pixabay");

// Book routes
router.use("/brands", brandRoutes);
router.use("/pixabay", pixabayRoutes);

module.exports = router;
