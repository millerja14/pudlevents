var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , partials: {header: 'header', head: 'head'}});
});

module.exports = router;
