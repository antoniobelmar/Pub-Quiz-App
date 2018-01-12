import React, { Component } from 'react';
import NewQuestion from './NewQuestion' ;

class NewQuiz extends Component {
  render() {
    return(
      <div>
      <p>Quiz Name</p>
      <input placeholder='Type your quiz name'></input>
      </div>
    );
  };
};

export default NewQuiz;
