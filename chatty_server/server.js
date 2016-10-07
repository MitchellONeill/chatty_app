
const express = require('express');
const SocketServer = require('ws').Server;
const PORT = 4000;
var uuid = require('node-uuid');

var colors = ['#bc8f8f', '#daa520', '#ffd700', '#808000']

const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));


const wss = new SocketServer({server});


wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    client.send(data);
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected');
  let users = wss.clients.length;
  wss.broadcast(JSON.stringify(users));
  ws.on('close', () => {
    wss.broadcast(JSON.stringify(users));
    console.log('Client disconnected');
  });
  ws.on('message', (newMessage) => {
    newMessage = JSON.parse(newMessage);
    let uid = uuid.v4()
    if(newMessage.type == "incomingMessage")
    {
      var randomColor = colors[getRandomInt(0, colors.length -1)];
      newMessage.color = randomColor

    }
    newMessage.id = uid;
    wss.broadcast(JSON.stringify(newMessage))
  })
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
