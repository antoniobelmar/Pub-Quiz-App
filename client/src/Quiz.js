import React, { Component } from 'react';

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
      <h1>{this.state.name}</h1>
    )
  }
}

export default Quiz;
