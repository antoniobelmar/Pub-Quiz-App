import React, { Component } from 'react';
import Question from './Question';
import StartPage from './startPage';
import ToggleDisplay from 'react-toggle-display';
import Axios from 'axios';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = { name: 'Loading', questions: [], number: 0, score: 0, show: false, teamName: "" }
  };

  componentDidMount(){
    let self = this;

    Axios.get("https://pub-quiz-api.herokuapp.com/api/quiz/5a56302e0a8cc10014501d8f")
     .then(function (response) {
       self.setState({name: response.data.name, questions: response.data.questions});
     })
     .catch(function (error) {
       console.log(error);
     });
  };

  hideButtonShowQuiz() {
    let self = this

    this.setState({show: true, teamName: document.getElementById('team-name').value})
    let ws = new WebSocket('ws://pub-quiz-api.herokuapp.com');
    ws.onopen = function() {
      function sendMessage() {
        let questionsLength = self.state.questions.length;
        if (self.state.number <= questionsLength) {
          ws.send(self.state.number + 1);
        }
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
  }

  render() {

      return(
        <div>

        <StartPage show={this.state.show} hideFunction={ () => this.hideButtonShowQuiz() }/>

        <ToggleDisplay show={this.state.show}>
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
        </ToggleDisplay>
        </div>
    )
  }
}

export default Quiz;
