import React from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

var data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};


const App = React.createClass({
 getInitialState() {
    return data;
  },

componentDidMount () {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    this.state.messages.push({id: 3, username: "Michelle", content: "Hello there!"});
    this.setState({data: this.state.data})
  }, 3001);
},

render() {
  console.log("Rendering app");
  return (
  <div>
    <MessageList
      messages = {this.state.messages} />
    <ChatBar
      currentUser = {this.state.currentUser.name}
      addChat={this.addChat}
       />
  </div>
  );
},

  addChat: function (newMessage) {
  let id = this.state.messages.length + 1;
  newMessage.id = id
  let newState = this.state.messages.push(newMessage);
  return this.setState({data: this.newState});
},

});

export default App;