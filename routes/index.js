var express = require('express');
var router = express.Router();

const {email, landing} = require('../controllers');

/* GET home page. */
router.get('/', landing);
router.post('/email', email);

module.exports = router;