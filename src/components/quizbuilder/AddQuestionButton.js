import React, { Component } from 'react';
import Button from './Button';

class AddQuestionButton extends Component {
  render() {
    return(
      <div>
        <Button
          text='Add Question'
          callback={this.props.addQuestion}
          arg1=''
          arg2=''
        />
      </div>
    )
  }
}

export default AddQuestionButton
