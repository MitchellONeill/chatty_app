import React from 'react';
import Message from './Message.jsx';
import Notification from './Message.jsx';


const MessageList = React.createClass({

  render() {
    console.log("Rendering <MessageList/>");
    console.log(this.props);
    let currentUser = this.props.currentUser;
    console.log(currentUser);
    console.log(this.props.messages[0]);
      return(
        <div id="message-list">
          {this.props.messages.map((result) => (
          <Message
           key = {result.id}
           username = {result.username}
           content = {result.content}
           type = {result.type}
           color = {result.color}
           currentUser = {result.currentUser} />
         ))}
        </div>
      )
    }
});

export default MessageList;
