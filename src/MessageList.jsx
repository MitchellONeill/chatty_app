import React from 'react';
import Message from './Message.jsx'


const MessageList = React.createClass({
  render() {
    return(
      <div id="message-list">
        <Message
         username='Mitch ONeill'
         content ="I won't be impressed with tech until I can download food" />
      </div>
      );
  }
});

export default MessageList;