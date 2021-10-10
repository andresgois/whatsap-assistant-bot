const stages = {
    0: {
      descricao: "Boas vindas",
      obj: require('./stages/0.js')      
    },
    1: {
      descricao: "Vendas",
      obj: require('./stages/1.js')
    },
    2: {
      descricao: "Resumo",
      obj: require('./stages/2.js')
    },
    3: {
      descricao: "Endereço",
      obj: require('./stages/3.js')
    },
    4: {
      descricao: "Enceramento",
      obj: require('./stages/4.js')
    },
  }

  exports.step = stages;