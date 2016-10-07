import React from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import UserCount from './UserCount.jsx'
const wss = new WebSocket("ws://localhost:4000");
 var data =
 {
    currentUser: {name: "Bob"},
    users: 1,
    messages: [{id: 1, type:"postMessage", username: "Bob", content: "Dummy content", currentUser: "Bob", color: "salmon"}]
  };


const App = React.createClass({

 getInitialState() {
  console.log('initial state');
    return (data);
  },

componentDidMount () {
  console.log("componentDidMount </app>");
  wss.onopen = function(event) {
    console.log("connected to websocket server");
   };

  wss.onmessage = (event) => {
    let data = this.state
    console.log('**888888***',  event);
    console.log(event.data.users);
    console.log('whats is event users', !isNaN(event.data.users), event.data.users);
    if(!isNaN(event.data))
    {
      let users = event.data
      data.users = users
      console.log('our data on user event',data);
      this.setState(data)
    }
    else
    {
      let message = JSON.parse(event.data)
      data.currentUser.name = message.username;
      data.messages.push(message);
      console.log('*$*8888$****', data);
      this.setState(data)
    }
    };
},


render() {
  let last = this.state.messages.length - 1;
  console.log('our state on render', this.state.messages);
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
  console.log("add CHAT!");
  if(newMessage.username === this.state.currentUser.name)
  {
    newMessage.type = "postMessage";
    console.log('addChat PM (****)', newMessage);
    wss.send(JSON.stringify(newMessage));
    this.forceUpdate();
  }
  else
  {
    newMessage.type = "incomingMessage"
      console.log('addChat IM 99999', newMessage);
    wss.send(JSON.stringify(newMessage));
    this.forceUpdate();
  }
},

});

export default App;

