var express = require('express');
const homeController = require('../controllers/homeController');
const pagamentoController = require('../controllers/pagamentoController');
var router = express.Router();

router.get('/', homeController.index);
router.get('/pagamento', pagamentoController.index);

module.exports = router;
