var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About us' });
});

router.get('/story', function (req, res, next) {
  res.render('story', { title: 'Our story so far' });
});

router.get('/unique', function (req, res, next) {
  res.render('unique', { title: 'What makes us unique' });
});

router.get('/model', function (req, res, next) {
  res.render('model', { title: 'Our operating model' });
});

router.get('/updates', function (req, res, next) {
  res.render('updates', { title: 'Updates' });
});

router.get('/gallery', function (req, res, next) {
  res.render('gallery', { title: 'Gallery' });
});

router.get('/team', function (req, res, next) {
  res.render('team', { title: 'Our team' });
});

router.get('/work', function (req, res, next) {
  res.render('work', { title: 'Our work' });
});

router.get('/join', function (req, res, next) {
  res.render('join', { title: 'Join us' });
});

router.get('/donate', function (req, res, next) {
  res.render('donate', { title: 'Donate' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact us' });
});

module.exports = router;
