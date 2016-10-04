import React from 'react'

const Message = React.createClass({
  render() {
    return (
      <div className="message">
        <span className="username">{this.props.username}</span>
        <span className="content">{this.props.content}</span>
      </div>
    );
  }
});

const MessageSystem = React.createClass ({
  render() {
    return (
      <div className="message system">
        <span>{this.props.messagesystem}</span>
      </div>
    );
  }
});

export {Message as default, MessageSystem};