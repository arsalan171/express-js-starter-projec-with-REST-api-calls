var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('list.html', { title: 'Express Hello' });
 //res.send('index')
});

module.exports = router;
