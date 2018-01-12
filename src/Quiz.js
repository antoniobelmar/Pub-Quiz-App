import React, { Component } from 'react';
import Question from './Question';
import StartPage from './startPage';
import ToggleDisplay from 'react-toggle-display';
import Axios from 'axios';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = { name: 'Loading', questions: [], number: 0, score: 0, show: false, time: 3000, allScores: [], teamName: "" }
  };

  componentDidMount(){
    let quizId = this.props.match.params.quizId;
    let self = this;

    Axios.get(`https://pub-quiz-api.herokuapp.com/quiz/${quizId}`)
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
        if(self.state.number < self.state.questions.length) {
          ws.send(JSON.stringify({type: "question", question: self.state.number + 1}));
        };
      };

      function sendScore() {
        if(self.state.number === self.state.questions.length) {
          console.log('message sent')
          ws.send(JSON.stringify({type: "score", teamName: self.state.teamName, score: self.state.score}))
        }
      }

      setInterval(sendMessage, self.state.time);
      setTimeout(sendScore, 20000);
    };

    ws.onmessage = function(event) {
      var jsonEvent = JSON.parse(event.data)
      if(jsonEvent.type === "question") {
        var radios = document.getElementsByName('options')
        radios.forEach(function(option) {
          if(option.checked === true && option.value === self.state.questions[self.state.number].answer[0]) {
            self.state.score += 1
          }
        })
        self.setState({ number: parseInt(jsonEvent.question) });
      } else if(jsonEvent[0].type === "score") {
        self.setState({ allScores: jsonEvent })
      }
    };

    this.setState({ ws: ws });
  }

  render() {
      return(
        <div className='quiz'>

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
        {this.state.allScores.length > 0 &&
          this.state.allScores.map(function(score, index) {
          return(
            <div key={index}>
              <h4> {score.teamName}: {score.score} </h4>
            </div>
            )
          })
        }
        </ToggleDisplay>
        </div>
    )
  }
}

export default Quiz;
