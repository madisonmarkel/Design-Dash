const router = require("express").Router();
const brandRoutes = require("./brands");

// Book routes
router.use("/brands", brandRoutes);

module.exports = router;
