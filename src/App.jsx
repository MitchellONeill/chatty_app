import React from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


const App = React.createClass({
  render() {
    return (
    <div>
      <MessageList />
      <ChatBar />
    </div>
    );
  }
});

export default App;