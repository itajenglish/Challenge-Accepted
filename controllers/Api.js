const express = require('express');
const router = express.Router();
const { getAllVideos, addNewVideo } = require('../models/Video')

router.get('/videos', getAllVideos, (req, res, next) => {})

router.post('/videos', addNewVideo, (req, res, next) => {
  console.log(req)
})


module.exports = router;
