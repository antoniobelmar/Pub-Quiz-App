import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { quizLinks: '' };
  }

  componentDidMount() {
    let self = this;
    axios.get('http://pub-quiz-api.herokuapp.com/quiz')
    // axios.get('http://localhost:5000/quiz')
      .then(function(response) {
        let array = [];
        response.data.forEach(function(quiz, key) {
          array.push(<li key={key}><a href={'/quiz/' + quiz._id}>{quiz.name}</a></li>);
        })
        self.setState({ quizLinks: array })
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  render() {
    return(
      <div>
        <h1>Home page</h1>
        <a href="/quiz/new"><button>Create a quiz!</button></a>
        <div>{this.state.quizLinks}</div>
      </div>
    )
  }
}

export default Home;
