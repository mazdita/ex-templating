const express = require('express');
const common = require('../controllers/common.controller');
const tweets = require('../controllers/tweets.controller');

const router = express.Router();

router.get('/', common.home);

router.get('/tweets', tweets.list);
router.post('/tweets', tweets.create);
router.post('/tweets/:id', tweets.fav);

module.exports = router;
