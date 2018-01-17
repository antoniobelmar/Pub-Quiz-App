import React, { Component } from 'react';

class GeneralSection extends Component {
  render() {
    return(
      <div>
        <h1 id='titleApp'>Pub-Quiz</h1>
        <input
          className='textArea'
          type='text'
          placeholder='Team Name'
          id='team-name'/>
        <button
          id='startQuizButton'
          type="button" onClick={this.props.startQuiz}
          disabled={this.props.disabled}>
          Start QUIZ!
        </button>
      </div>
    )
  }
}

export default GeneralSection;
