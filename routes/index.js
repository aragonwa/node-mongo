var express = require('express');
var router = express.Router();
var Signature = require('../models/signature.js');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' })
// })
router.get('/', function (req, res) {
  res.json('you did it');
});
router.get('/api/signatures', function (req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
  });
});

router.post('/api/signatures', function (req, res) {
  console.log(req.body);
  
  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageofGuest
  }).then(signature => {
    res.json(signature);
  })
  .catch(function(error){
    console.log('Error posting');
  });
});
module.exports = router;
