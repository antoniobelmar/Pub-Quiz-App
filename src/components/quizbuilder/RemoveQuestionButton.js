import React, { Component } from 'react';
import Button from './Button'

class RemoveQuestionButton extends Component {
  render() {
    return(
      <div
        onClick={(event)=>this.props.removeQuestion(this.props.index, event)}
        >
          <Button
            text="X"
          />
      </div>
    )
  }
}


export default RemoveQuestionButton;
