const express = require('express');
const router = express.Router();

router.all('/', (req, res, next) => {
  if (req.session.user) {
    res.redirect('/videos');
  } else {
    next();
  }
})

// Home#Show
router.get('/', (req, res, next) => {
    res.render('home/index');
});

module.exports = router;
