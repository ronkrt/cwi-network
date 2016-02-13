var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: '.: CWI-Network :. User Admin Panel' });
});
router.get('/login', function(req, res, next) {
  res.render('users', { title: '.: CWI-Network :. Login' });
});
router.get('/signup', function(req, res, next) {
  res.render('users', { title: '.: CWI-Network :. Sign-Up' });
});

module.exports = router;
