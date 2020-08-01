var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send({
    message: "You did it!"
  })
});

module.exports = router;
