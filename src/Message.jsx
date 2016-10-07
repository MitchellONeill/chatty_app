import React from 'react'

const Message = React.createClass({

  render() {
    var spanStyle = {color: this.props.color};
    console.log("Rendering <Message/>", this.props);
    if(this.props.type === "postMessage") {
      return (
        <div className="message">
          <span className="username">{this.props.username}</span>
          <span className="content">{this.props.content}</span>
        </div>
      );
    } else if (this.props.type === "incomingMessage") {
      return(
        <div className="message system">
          <span className="content">{this.props.content}</span>
        </div>
      );
    }
  }
});


export {Message as default};