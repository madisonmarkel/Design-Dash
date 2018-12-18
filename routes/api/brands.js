const router = require("express").Router();
const routeController = require("../../controllers/routeController");

// Matches with "/api/books"
router.route("/")
  .get(routeController.findAll)
  .post(routeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(routeController.findById)
  .put(routeController.update)
  .delete(routeController.remove);

module.exports = router;