import React, { Component } from 'react';

class GeneralSection extends Component {
  render() {
    return(
      <div className='col-sm-8 col-sm-offset-2'>
        <h1 id='titleApp'>Pub-Quiz</h1>
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
          Start QUIZ!
        </button>
      </div>
    )
  }
}

export default GeneralSection;
