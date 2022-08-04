var express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();


router.get('/', homeController.index)

module.exports = router;
