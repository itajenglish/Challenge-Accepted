const express = require('express');
const router = express.Router();
const { register } = require('../models/User');

//User#Create
router.post('/', register, (req, res, next) => {
  res.redirect('/login');
});


module.exports = router;
