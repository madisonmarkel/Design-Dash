const router = require("express").Router();
const brandRoutes = require("./brands");
const pixabayRoutes = require("./pixabay");
const userRoutes = require("./users");

// Book routes
router.use("/brands", brandRoutes);
router.use("/pixabay", pixabayRoutes);
router.use("/users", userRoutes);

module.exports = router;
