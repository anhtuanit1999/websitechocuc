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
module.exports = router;