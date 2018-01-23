import React, { Component } from 'react';

class GeneralSection extends Component {
  render() {
    return(
      <div className='start-quiz-div'>
        <input
          className='textArea new-quiz'
          type='text'
          placeholder='Team Name'
          id='team-name'/>
        <button
          className='start-button'
          id='startQuizButton'
          type="button" onClick={this.props.startQuiz}
          disabled={this.props.disabled}>
          Start!
        </button>
      </div>
    )
  }
}

export default GeneralSection;
