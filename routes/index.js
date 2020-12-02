var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Index' });
});

router.get('/explorer', function(req, res, next) {
    res.render('explorer', { title: 'Explorer' });
});

router.get('/favorite', function(req, res, next) {
    res.render('favorite', { title: 'favorite' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.get('/single-listing', function(req, res, next) {
    res.render('single-listing', {
        title: 'Listing'
    });
});

module.exports = router;