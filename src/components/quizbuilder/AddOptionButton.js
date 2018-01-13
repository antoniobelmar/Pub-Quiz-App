import React, { Component } from 'react';
import Button from './Button'

class AddOptionButton extends Component {
  render(){
    return(
      <div
      onClick={(event)=> this.props.addOption(this.props.questionIndex, event)}
        >
        <Button
          text='Add Option'
        />
      </div>
    )
  }
}



export default AddOptionButton;
