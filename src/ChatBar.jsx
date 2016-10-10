import React from 'react';


const ChatBar = React.createClass({
  handleChangeUsr(event) {
    this.setState({user: event.target.value});
  },

  handleChangeContent(event) {
    this.setState({content: event.target.value});
  },

  getInitialState () {
    return {
      user: this.props.currentUser,
    }
  },

  onEnter (e) {
    console.log("onInputKeyPress <ChatBar />");
    let user;
    console.log(e.key);
    if(e.key ===  'Enter' && this.state.content) {
      if(this.state.user === ''){user = 'Anonymous'}
      else {user = this.state.user}
      let newMsg = this.props;
      this.props.addChat({username: user, content: this.state.content});
      this.state.content = '';
    };
  },

  render() {
    console.log("Rendering <ChatBar/>");
    return(
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)"
        value={this.state.user}
        onKeyPress={this.onEnter}
        onChange={this.handleChangeUsr}
        />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER"
        value={this.state.content}
        onKeyPress={this.onEnter}
        onChange={this.handleChangeContent}
        />
      </footer>
    )
  }
})


export default ChatBar;