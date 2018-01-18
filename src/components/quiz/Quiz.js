import React, { Component } from 'react';
import ScorePage from './scorePage/ScorePage';
import StartPage from './startPage/StartPage';
import ShareableLink from './links/ShareableLink'
import QuestionContainer from './questions/QuestionContainer';
import ToggleDisplay from 'react-toggle-display';
import client from '../../lib/wsClient';
import axios from 'axios';
import './Quiz.css'

// const URL = 'localhost:5000'
const URL = 'pub-quiz-api.herokuapp.com'

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Loading',
      leader: false,
      questions: [],
      questionsRecieved: false,
      number: 0,
      score: 0,
      show: false,
      disabledButton: true,
      allScores: [],
      teamName: "",
      time: 10000,
      wsId: null
    }
  };

  componentDidMount(){
    let quizId = this.props.match.params.quizId;
    let self = this;
    var wsId = new URLSearchParams(window.location.search).get('id')

    axios.get(`http://${URL}/quiz/${quizId}`)
      .then(function (response) {
        self.setState({
          name: response.data.name,
          questions: response.data.questions,
          questionsRecieved: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    if (wsId) {
      self.connect(wsId)
    } else {
      axios.get(`http://${URL}/play`)
      .then(function (response) {
        self.connect(response.data.id)
      })
    }
  };

  connect(id) {
    var state = this.state;
    state.client = client.buildWsClient(this, `ws://${URL}/play/${id}`, id);
    state.wsId = id;
    this.setState(state);
  }

  hideButtonShowQuiz() {
    if (this.state.leader) {
      let time = this.getTimeout();
      this.updateTimeout(time);
      this.state.client.changeTimeout(time);
    };
    this.setState({
      show: true,
      teamName: document.getElementById('team-name').value,
    });
    this.state.client.start();
  };

  showLeaderMessage() {
    this.setState({ leader: true });
  };

  updateScores(scores) {
    this.setState({ allScores: scores });
  };

  updateDisable(){
    this.setState({ disabledButton: false });
  };

  updateTimeout(time) {
    this.setState({ time: time });
  };

  updateQuestionIdOnly(id) {
    this.setState({ number: id });
  };

  updateQuestion(id, time) {
    let self = this;
    let radios = document.getElementsByName('options');
    let textArea = document.getElementById('textAnswer')
    let answer = this.state.questions[this.state.number].answer[0];
    if (this.state.questions[this.state.number].type === 'MultipleChoice'){
      radios.forEach(function(option) {
        if (option.checked === true && option.value === answer.text) {
          self.state.score += 1;
        };
        option.checked = false
      });
    } else {
      if (this.state.questions[this.state.number].answer[0].text.includes(textArea.value.toLowerCase())) {
        self.state.score += 1;
      };
    };
    this.setState({ number: parseInt(id), time: time });
  };

  isFinished() {
    return this.getQuestion() === this.state.questions.length;
  };

  getName() {
    return this.state.teamName;
  };

  getQuestion() {
    return this.state.number;
  };

  getScore() {
    return this.state.score;
  };

  getTimeout(fallback = 20) {
    let node = document.getElementById('timeout-value');
    let entry = parseInt(node.value);
    return (Number.isNaN(entry) ? fallback : entry) * 1000;
  };

  render() {
    let number = this.state.number;
    let wsId = this.state.wsId;
    let show = this.state.show;

    return (
      <div className='quiz'>
      { !show &&
        <StartPage
          wsId={wsId}
          disabled={this.state.disabledButton}
          leader={this.state.leader}
          startQuiz={this.hideButtonShowQuiz.bind(this)}
        />
      }
      { show && this.isFinished() &&
        <ScorePage
          questions={this.state.questions}
          scores={this.state.allScores}
          score={this.state.score}
        />
      }
      { show && !this.isFinished() &&
        <div>
          <h1>{this.state.name}</h1>
          <QuestionContainer
            wsId={wsId}
            question={this.state.questions[number]}
            time={this.state.time}
            id={number}
          />
        </div>
      }
      </div>
    );
  };
};

export default Quiz;
