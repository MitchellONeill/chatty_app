import React from 'react';
import Message from './Message.jsx';

const MessageList = React.createClass({

  render() {
     console.log("Rendering <MessageList/>");

    return(
      <div id="message-list">
        {this.props.messages.map((result) => (
        <Message
         key= {result.id}
         username = {result.username}
         content = {result.content} />
         ))}
      </div>
      );
    }
});

export default MessageList;
