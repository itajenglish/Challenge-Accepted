const express = require('express');
const router = express.Router();
const { register } = require('../models/User');
const { getAllVideos } = require('../models/Video')


router.post('/users', register, (req, res, next) => {
  res.send('Success!');
});

router.get('/videos', getAllVideos, (req, res, next) => {})



module.exports = router;
