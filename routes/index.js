var express = require('express');
const homeController = require('../controllers/homeController');
const pagamentoController = require('../controllers/pagamentoController');
const carrinhoController = require('../controllers/carrinhoController');
var router = express.Router();

router.get('/', homeController.index);
router.get('/pagamento', pagamentoController.index);
router.get('/carrinho', carrinhoController.index);

module.exports = router;
