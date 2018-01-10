import React, { Component } from 'react';
import Question from './Question';
import ToggleDisplay from 'react-toggle-display';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = { name: 'Loading', questions: [], number: 0, score: 0, show: false }
  };

  componentDidMount(){
    let self = this;

    fetch('/api/quiz/5a5602c29e64c01785ddd8b8')
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

  hideButtonShowQuiz() {
    this.setState({show: true})
  }

  render() {

      return(
        <div>

        <ToggleDisplay if={!this.state.show}>
        <button type="button" onClick={ () => this.hideButtonShowQuiz() } >Start QUIZ!</button>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.show}>
        <h1>{this.state.name}</h1>
        { this.state.questions.length > 0 && this.state.number < this.state.questions.length &&
          <Question question={this.state.questions[this.state.number]} />
        }
          {console.log(this.state.questions)}
        { this.state.number >= this.state.questions.length &&
          <div>
            <h2> Thanks for playing! </h2>
            <h3> Your score was {this.state.score} </h3>
          </div>
        }
        </ToggleDisplay>
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
