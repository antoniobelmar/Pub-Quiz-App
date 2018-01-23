import React, { Component } from 'react';

class NewQuizName extends Component {
  render(){
    return(
      <div className='new-quiz-name-div'>
        <h1> Quiz Name </h1>
        <input
          type="text"
          className="input-field new-quiz"
          id="quiz-name-input"
          placeholder={this.props.placeholder}
          value={this.props.name}
          onChange={(event) => this.props.handleChangeName(event)}
          >
        </input>
      </div>
    );
  };
};

export default NewQuizName;
