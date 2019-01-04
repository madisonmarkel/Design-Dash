const router = require("express").Router();
const routeController = require("../../controllers/routeController");

// Matches with "/api/users"
router.route("/")
  .get(routeController.findAll)
  .post(routeController.createUser);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(routeController.findById)
  .put(routeController.update)
  .delete(routeController.remove);

module.exports = router;