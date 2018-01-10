import React, { Component } from 'react';
import Question from './Question';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = { name: 'Loading', questions: [], number: 0, score: 0 }
  };

  componentDidMount(){
    let self = this;

    fetch('/api/quiz/5a55e9fadc179c085c3c685a')
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
      var radios = document.getElementsByName('options')
      radios.forEach(function(option) {
        if(option.checked === true && option.value === self.state.questions[self.state.number].answer[0]) {
          self.state.score += 1
        }
      })
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
        { this.state.number >= this.state.questions.length &&
          <div>
            <h2> Thanks for playing! </h2>
            <h3> Your score was {this.state.score} </h3>
          </div>
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
