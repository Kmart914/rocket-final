const router = require("express").Router();
const apiPaths    = require('./apiroutes');
const itemsController = require('../../controller/itemsController');


router.route("/api/info")
      .get(/*Some function*/);

router.route("/api/items")
      .get(itemsController.listAll());

router.route("/api/wish")
      .get(/*some function*/)
      .post(/*some function*/)
      .delete(/*some function*/);

module.exports = router;
