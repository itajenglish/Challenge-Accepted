const express = require('express');
const router = express.Router();
const { register } = require('../models/User');
const { getAllVideos, addNewVideo } = require('../models/Video')


router.post('/users', register, (req, res, next) => {
  res.send('Success!');
});

router.post('/videos', addNewVideo, (req, res, next) => {})


module.exports = router;
