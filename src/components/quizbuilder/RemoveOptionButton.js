import React, { Component } from 'react';
import Button from './Button';

class RemoveOptionButton extends Component {
  render() {
    return(
      <div
      onClick={(event)=> this.props.removeOption(this.props.questionIndex, this.props.index, event)}>
        <Button
          text='X'
        />
      </div>
    )
  }
}


export default RemoveOptionButton;
