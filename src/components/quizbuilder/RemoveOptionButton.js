import React, { Component } from 'react';
import Button from './Button';

class RemoveOptionButton extends Component {
  render() {
    return(
      <div className='X'>
        <Button
          text='X'
          callback={this.props.removeOption}
          arg1={this.props.questionIndex}
          arg2={this.props.index}
        />
      </div>
    )
  }
}


export default RemoveOptionButton;
