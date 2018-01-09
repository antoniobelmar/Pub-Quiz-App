import React, { Component } from 'react';
import Question from './Question';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {name: 'Loading', questions: []}
  }
  componentDidMount(){
    let self = this;
    fetch('/api/quizzes/1')
    .then((resp) => resp.json())
    .then(function(data){
      self.setState({name: data.name, questions: data.questions });
    });
  };

  render() {
      return(
        <div>
        <h1>{this.state.name}</h1>
        { this.state.questions.length > 0 &&
          <Question question={this.state.questions[0]} />
        }
        </div>
    )
  }
}



export default Quiz;
