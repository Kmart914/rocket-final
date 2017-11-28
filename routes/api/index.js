const router = require('express').Router();
const apiroutes = require('./apiroutes');

router.use("/api", apiroutes);

module.exports = router;
