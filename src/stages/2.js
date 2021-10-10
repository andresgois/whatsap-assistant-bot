const cardapio = require('../cardapio');
const banco = require('../banco')

function execute(user, msg){
    let resumo = "\n RESUMO \n";
    let total = 0;
    Array(banco.db[user].itens).forEach( (v) => {
    })
   
    banco.db[user].stage = 1;
    return ["Olá, Sou sua assistênte virtual", menu];
}

exports.execute = execute;