var express = require('express');
var router = express.Router();
const  User = require('../database/userModel');
const Quote = require('../database/quotesModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    PhoneNumber: req.body.PhoneNumber
  });
  User.find({$or: [{username: req.body.userName}, {email: req.body.email}]}, (err, result)=> {
    if (err) {
      res.send({status: 'failed', msg: err});
    } else if (!result.length) {
      newUser.save((err, data) => {
        if (err) {
          res.send({status: 'failed', msg: err});
        } else {
          res.send({status: 'success', data: data});
        }
      })
    } else {
      res.send({status: 'failed', msg: 'User has already created.'})
    }
  })
});

router.post('/login', (req, res) => {
  User.find({$and: [{userName: req.body.userName}, {password: req.body.password}]}, (err, user) => {
    if (err) {
      res.send({status: 'failed', msg: err});
    } else if (user.length) {
      res.send({status: 'success', data: user[0]});
    } else {
      res.send({status: 'failed', masg: 'Invalid credentilas.'});
    }
  })
});

router.post('/addQuote', (req,res) => {
  const newQuote = new Quote({
    author: req.body.author,
    quote: req.body.quote
  });
  Quote.find({username: req.body.userName},(err, result) =>{
    if (err) {
      res.send({status: 'failed', msg: err});
    } else if (!result.length) {
      newQuote.save((err, data) => {
        if (err) {
          res.send({status: 'failed', msg: err});
        } else {
          res.send({status: 'success', data: data});
        }
      })
    } else {
      res.send({status: 'failed', msg: 'Quote is already added.'})
    }
  })
});

router.get('/getAllQuotes', (req, res) => {
  Quote.find({}, (err, data) => {
    if (err) {
      res.send({status: 'failed', msg: err});
    } else {
      res.send({status: 'success', data: data});
    }
  })
})

module.exports = router;
