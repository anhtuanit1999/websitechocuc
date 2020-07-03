var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/baidang', function(req, res, next) {
    res.render('baidang');
});

router.get('/lienhe', function(req, res, next) {
    res.render('lienhe');
});

router.get('/lich', function(req, res, next) {
    res.render('lich');
});

router.get('/calendar', function(req, res, next) {
    res.render('calendar');
});

router.get('/quote1', function(req, res, next) {
    res.render('quote1');
});

router.get('/quote2', function(req, res, next) {
    res.render('quote2');
});

router.get('/quote3', function(req, res, next) {
    res.render('quote3');
});

router.get('/thanhtoan', function(req, res, next) {
    res.render('thanhtoan');
});
module.exports = router;