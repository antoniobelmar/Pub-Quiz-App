import React, { Component } from 'react';
import Button from './Button'

class RemoveQuestionButton extends Component {
  render() {
    return(
      <div>
        <Button
          text="Delete"
          callback={this.props.removeQuestion}
          arg1={this.props.index}
          arg2=''
        />
      </div>
    )
  }
}


export default RemoveQuestionButton;
