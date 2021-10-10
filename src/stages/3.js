const banco = require('../banco')
const stages = require('../stages');

function execute(user, msg){

    if(msg === '*'){
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }
    if(msg === '#'){
        banco.db[user].stage = 4;

        return stages.step[4].obj.execute(user, "");
    }

    return [
        `Confirma o endereço para entrega: \n ${msg}\n\n`,
        "```Digite # para finalizar ou * para continuar```"
    ];
}

exports.execute = execute;