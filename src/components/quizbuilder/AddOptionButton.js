import React, { Component } from 'react';
import Button from './Button'

class AddOptionButton extends Component {
  render(){
    return(
      <div>
        <Button
          text='Add Option'
          callback={this.props.addOption}
          arg1={this.props.questionIndex}
          arg2=''
        />
      </div>
    )
  }
}

export default AddOptionButton;
