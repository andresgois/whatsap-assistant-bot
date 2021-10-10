const cardapio = require('../cardapio');
const banco = require('../banco')

function execute(user, msg){

    if(msg === '*'){
        banco.db[user].stage = 0;
        banco.db[user].itens = [];
        return ["Pedido cancelado com sucesso"];
    }
    if(msg === '#'){
        banco.db[user].stage = 3;
        return ["Digite seu endereço por favor"];
    }

    let resumo = "RESUMO DO PEDIDO\n\n";
    let total = 0;
    
    banco.db[user].itens.forEach( (v) => {
        resumo += `${v.descricao}\t\t${v.preco}\n`;
        total += v.preco;
    });

    resumo += '\n\n';
    resumo += ` Total R$ ${total.toFixed(2)}\n\n`;

    return [
        resumo,
        "```Digite # para finalizar o pedido ou * para Sair```"
    ];
}

exports.execute = execute;