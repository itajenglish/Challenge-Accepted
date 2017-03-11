const express = require('express');
const router = express.Router();

// Home#Show
router.get('/', (req, res, next) => {
    res.render('home/index');
});

module.exports = router;
