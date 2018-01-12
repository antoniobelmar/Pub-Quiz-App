import React, { Component } from 'react';
import NewQuestion from './NewQuestion' ;

class NewQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', questions: [{type: '', text: '', options: [{text: ''}], correctAnswer: [{text: ''}] }]}

    this.handleChangeName = this.handleChangeName.bind(this)
  }

  handleChangeName(event) {
    this.setState({name: event.target.value})
  }

  render() {
    {console.log(this.state)}
    return(
      <div>
      <p>Quiz Name</p>
      <input type="text" placeholder="Type your quiz name" value={this.state.name} onChange={this.handleChangeName} ></input>
      </div>
    );
  };
};

export default NewQuiz;
