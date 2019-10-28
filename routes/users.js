var express = require('express');
var router = express.Router();
const {email} = require('../controllers/email');
/* GET users listing. */
router.post('/email', email);

module.exports = router;