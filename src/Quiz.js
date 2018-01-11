import React, { Component } from 'react';
import Question from './Question';
import ToggleDisplay from 'react-toggle-display';
import Axios from 'axios';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = { name: 'Loading', questions: [], number: 0, score: 0, show: false }
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

    let ws = new WebSocket('ws://localhost:5000');

    // ws.onopen = function() {
    //   function sendMessage() {
    //     ws.send(self.state.number + 1);
    //   };
    //   setInterval(sendMessage, 2000);
    // };

    ws.onmessage = function(event) {
      console.log('HEREEE',event.data)
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
    let self = this

    this.setState({show: true})
    let ws = new WebSocket('ws://localhost:5000');
    ws.onopen = function() {
      console.log(ws)
      function sendMessage() {
        ws.send(self.state.number + 1);
        // console.log(self.state.number)
      };
      setInterval(sendMessage, 2000);
    };
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
