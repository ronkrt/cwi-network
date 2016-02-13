var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('faucet', { title: '.: CWI-Network :. Faucet' });
});

router.get('/add', function(req, res, next) {
  res.render('faucet-add', { title: '.: CWI-Network :. Add Faucet' });
});

router.get('/edit', function(req, res, next) {
  res.render('faucet-edit', { title: '.: CWI-Network :. Edit Faucet' });
});

router.get('/del', function(req, res, next) {
  res.render('faucet-delete', { title: '.: CWI-Network :. Delete Faucet' });
});

router.get('/:dynamic', function(req, res) {
  var dynamic = req.params.dynamic;
  res.render('faucet-display', { title: '.: CWI-Network :. Faucet ' + dynamic + ''});
});

module.exports = router;
