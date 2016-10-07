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
    } else if (this.props.type === "incomingMessage" && this.props.content) {
      return(
        <div>
          <div className="message system">
            <span className="content">{this.props.currentUser} changed their name to {this.props.username}</span>
          </div>
          <div className="message">
           <span className="username" style={spanStyle}>{this.props.username}</span>
            <span className="content" style={spanStyle}>{this.props.content}</span>
          </div>
        </div>
      )
    } else if(this.props.type === "incomingMessage" && !this.props.content) {
    return (
      <div className="message system">
        <span className="content">{this.props.currentUser} changed their name to {this.props.username}</span>
      </div>
     )
    }
  }
});


export {Message as default};