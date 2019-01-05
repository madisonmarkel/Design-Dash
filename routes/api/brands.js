const router = require("express").Router();
const routeController = require("../../controllers/routeController");

// Matches with "/api/brands"
router.route("/")
  .get(routeController.findAll)
  .post(routeController.create);

// Matches with "/api/brands/:id"
router
  .route("/:id")
  .get(routeController.findById)
  .put(routeController.findByIdAndUpdate)
  .delete(routeController.remove);

module.exports = router;