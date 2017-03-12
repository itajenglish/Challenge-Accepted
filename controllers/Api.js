const express = require('express');
const router = express.Router();
const { register } = require('../models/User');
const { getAllVideos, addNewVideo } = require('../models/Video')


router.post('/users', register, (req, res, next) => {
  res.send('Success!');
});

router.get('/videos', getAllVideos, (req, res, next) => {
})

router.post('/videos', addNewVideo, (req, res, next) => {
  console.log(req);

})



module.exports = router;
