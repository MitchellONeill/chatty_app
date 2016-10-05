import React from 'react';


const ChatBar = React.createClass({
  handleChangeUsr(event) {
    this.setState({user: event.target.value});
  },

  handleChangeContent(event) {
    this.setState({message: event.target.value});
  },

  getInitialState () {
    return {user: this.props.currentUser}
  },

  onEnter (e) {
    console.log("onInputKeyPress <ChatBar />");
    if(e.key ===  'Enter') {
      this.props.addChat({username: this.state.user, content: this.state.message});
      this.setState({valueFromInput: ''});
    };
  },


  render() {
    console.log("Rendering <ChatBar/>");
    return(
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)"
        value={this.state.user}
        onChange={this.handleChangeUsr}
        />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER"
        onKeyPress={this.onEnter}
        onChange={this.handleChangeContent}
        />
      </footer>
    )
  }
})


export default ChatBar;