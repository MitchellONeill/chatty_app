import React from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import UserCount from './UserCount.jsx'

 var data =
 {
    socketConnection: {},
    currentUser: {name: "Bob"},
    users: 1,
    messages: [{id: 1, type:"postMessage", username: "Bob", content: "Dummy content"}]
  };


const App = React.createClass({

 getInitialState() {
  console.log('initial state');
    return (data);
  },

componentDidMount () {
  console.log("componentDidMount </app>");
  this.state.socketConnection = new WebSocket("ws://localhost:4000");
  this.state.socketConnection.onopen = function(event) {
    console.log("connected to websocket server");
   };
  this.state.socketConnection.onmessage = (event) => {
    let data = this.state;
    if(!isNaN(event.data))
    {
      let users = event.data
      data.users = users
      this.setState(data)
    }
    else
    {
      let message = JSON.parse(event.data)
      data.messages.push(message);
      this.setState(data)
    }
    };
  },

render() {
  return (
  <div>
    <nav id="chatnav">
      <h1>Chatty</h1>
      <UserCount
        users = {this.state.users}
        />
    </nav>
    <MessageList
      currentUser = {this.state.currentUser.name}
      messages = {this.state.messages} />
    <ChatBar
      currentUser = {this.state.currentUser.name}
      messages = {this.state.messages}
      addChat= {this.addChat}
       />
  </div>
  );
},

  addChat: function (newMessage) {
    if(newMessage.username !== this.state.currentUser.name)
    {
      let incoming = {}
      incoming.content = this.state.currentUser.name + " changed his name to " + newMessage.username;
      incoming.type = "incomingMessage"
      this.state.currentUser.name = newMessage.username;
      this.state.socketConnection.send(JSON.stringify(incoming));
    }
    newMessage.type = "postMessage";
      this.state.socketConnection.send(JSON.stringify(newMessage));
  }
});

export default App;

