import React, { Component } from 'react';

// const host = location.host;
// console.log(host);
// const ws = new WebSocket(`ws://localhost:3000`);

// function openSocket(num) {
//   console.log('openSocket');
//   ws.onopen = function(){
//
//     function sendMessage(num){
//       var increment = parseInt(num)
//       increment += 1
//       ws.send(increment);
//     };
//     // setInterval(sendMessage, 2000);
//
//
//
//   };
// }


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    var that = this;
    this.activateLasers = this.activateLasers.bind(this);
    this.handleData = this.handleData.bind(this);
    this.ws = new WebSocket(`ws://localhost:5000`);
    const ws = this.ws;
    ws.onopen = function() {
      function sendMessage(){
        var increment = parseInt(that.state.number);
        increment += 1;
        ws.send(increment);
      };
      setInterval(sendMessage, 1000);
    }

    ws.onmessage = function(event) {
      that.setState({number: event.data});
    }
  }


  activateLasers() {
    this.setState({number: this.state.number + 1});
  }

  handleData(data) {
    console.log(data);
  }


  render() {
    return (
      <div>
        <button>
          Activate Lasers
        </button>
        <h1>HELLO {this.state.number}</h1>
      </div>
    )
  }
}

export default Test;
