import React from 'react'


const socket = new WebSocket("ws://localhost:4000/socketserver");


const App = React.createClass{(

  componentDidMount(){
    socket.onopen = function(event) {
      console.log("connected to the websocket server");
    }
  }

  )}