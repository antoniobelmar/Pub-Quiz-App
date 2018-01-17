import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import './startPage.css'

class StartPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ToggleDisplay if={!this.props.show}>
        <div className='col-sm-8 col-sm-offset-2'>
          <h1 id='titleApp' className='text-center'>Pub-Quiz</h1>
            <input
              className='textArea new-quiz'
              type='text'
              placeholder='Team Name'
              id='team-name'/>
            <button
              className='start-button'
              id='startQuizButton'
              type="button" onClick={this.props.hideFunction}
              disabled={this.props.disabled}>
              Start Quiz!
            </button>
        </div>
      </ToggleDisplay>
    )
  }
}

export default StartPage;
