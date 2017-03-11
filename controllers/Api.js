const express = require('express');
const router = express.Router();
const { register } = require('../models/user');

router.post('/users', register, (req, res, next) => {
  res.send('Success!');
});



module.exports = router;
