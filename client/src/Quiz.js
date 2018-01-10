import React, { Component } from 'react';
import Question from './Question';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = { name: 'Loading', questions: [], number: 0 }
  };

  componentDidMount(){
    let self = this;

    fetch('/api/quiz/5a55ad6fcc74d9ccf3705c5b')
      .then((resp) => resp.json())
      .then(function(data){
        self.setState({name: data.name, questions: data.questions });
      });

    let ws = new WebSocket('ws://localhost:5000');

    ws.onopen = function() {
      function sendMessage() {
        ws.send(self.state.number + 1);
      };
      setInterval(sendMessage, 10000);
    };

    ws.onmessage = function(event) {
      self.setState({ number: parseInt(event.data) });
    };

    this.setState({ ws: ws });
  };

  render() {
      return(
        <div>
        <h1>{this.state.name}</h1>
        { this.state.questions.length > 0 && this.state.number < this.state.questions.length &&
          <Question question={this.state.questions[this.state.number]} />
        }
        </div>
    )
  }
}

export default Quiz;

// NOT CODE

// class Test extends Component {
//   constructor(props) {
//     this.handleData = this.handleData.bind(this);
//
//
//
//   }
//
//   handleData(data) {
//     console.log(data);
//   }
