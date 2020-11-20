var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/explorer', function(req, res, next) {
  res.render('explorer', { title: 'Explorer' });
});
// router.get('/explorer/:a/:b/:c', function(req, res) {
//   var a = req.params.a;
//   var b = req.params.b;
//   var c = req.params.c;
//   res.send({"a":a,"b":b,"c":c});
// });

router.get('/listing', function(req, res, next) {
  res.render('listing', { title: 'Listing' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/single-listing', function(req, res, next) {
  res.render('single-listing', { title: 'Listing' });
});

module.exports = router;
