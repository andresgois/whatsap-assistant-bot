const banco = require("./banco.js")
const stages = require("./stages.js")
const venom = require('venom-bot');

function send(user, msg){
  //let resp = stages.step[getStage("user1")].obj.execute();
  let resp = stages.step[getStage(user)].obj.execute(user, msg);

  let element = "";
  for(let i=0;i< Array(resp).length; i++){
    element += Array(resp)[i];
    //console.log(element.toString());
  }
  return element;
}

venom.create().then((client) => start(client)).catch((erro) => {    console.log(erro);  });

function start(client) {
  client.onMessage((message) => {
//stages.step[getStage(user)].obj.execute())//
    client
    .sendText(
      message.from, 
      send(message.from, message.body)
      )
    .then((result) => {
      console.log('Result: ', result); //return object success
      //console.log('Usuário:  '+result.to.remote._serialized)
      //console.log(message)
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });

  });
}


function getStage(user){
  return banco.db[user].stage;
}
