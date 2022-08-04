const carrinhoController = {
    addCarrinho:(req,res) => {
        res.send('Adicionando item ao seu carrinho de compras.')
    },
    delCarrinho:(req,res) => {
        res.send ('Deletando um item do seu carrinho de compras.')
    }
}

module.exports = carrinhoController