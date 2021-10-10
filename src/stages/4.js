const banco = require('../banco')

function execute(user, msg){

    banco.db[user].stage = 0;

    return [
        "Obrigado pela preferência\n",
        "Aguarde, seu perdido chegará em breve\n",
        "Mais informações, Ligue: (00) 0000-000"
    ];
}

exports.execute = execute;