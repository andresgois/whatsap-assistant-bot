const cardapio = require('../cardapio');
const banco = require('../banco')

function execute(user, msg){
    let menu = "\n\n";

    Object.keys(cardapio.menu).forEach((value => {
        let element = cardapio.menu[value];
        menu += `${value} - ${element.descricao}\t\tR$ ${element.preco}\n`;
    }))

    banco.db[user].stage = 1;
    return ["Olá, Sou sua assistênte virtual", menu];
}

exports.execute = execute;