import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class StartPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ToggleDisplay if={!this.props.show}>

      <input type='text' placeholder='Team Name' id='team-name'/>
      <button type="button" onClick={this.props.hideFunction} >Start QUIZ!</button>
      </ToggleDisplay>
    )
  }
}

export default StartPage;
