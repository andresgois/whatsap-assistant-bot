const cardapio = require('../cardapio');
const banco = require('../banco');

function execute(user, msg){

    if(msg === '*'){
        banco.db[user].stage = 0;
        banco.db[user].itens = [];
        return ["Pedido cancelado com sucesso"];
    }
    if(msg === '#'){
        banco.db[user].stage = 2;
        return ["Estamos fechando seu pedido, Ok?? "];
    }

    if(!cardapio.menu[msg]) {
        return [
            "Código inválido, digite corretamente\n",
            "```Digite # para finalizar o pedido ou * para Sair```"
        ];
    }

    banco.db[user].itens.push(cardapio.menu[msg]);

    return [
        `Item(${cardapio.menu[msg].descricao}) adicionado com sucesso\n`,
        "```Digite # para finalizar o pedido ou * para Sair```"
    ]
}

exports.execute = execute;