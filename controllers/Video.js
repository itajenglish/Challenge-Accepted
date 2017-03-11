const express = require('express');
const router = express.Router();
const { getVideosByUserId } = require('../models/Video')

router.use('/', (req, res, next) => {
  if(!req.session){
    res.redirect('/login');
  } else {
    next();
  }
})

router.get('/', (req, res, next) => {
  res.render('videos/index');
})

module.exports = router;
