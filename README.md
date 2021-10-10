# whatsap-assistant-bot
project of a virtual assistant to streamline customer service via whatsapp


### Backup
```
const banco = require("./banco.js")
const stages = require("./stages.js")

let resp = stages.step[getStage("user1")].obj.execute();
for(let i=0;i< Array(resp).length; i++){
  const element = Array(resp)[i];
  console.log(element);
}
// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
/*const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Bem Vindos a BE Mimos e decorações')
        .then((result) => {
          console.log('Result: ', result); //return object success
          console.log(message)
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}
*/




function getStage(user){
  return banco.db[user].stage;
}

// console.log(getStage("user2"))
// console.log(stages.step[getStage("user1")].obj.execute())
```