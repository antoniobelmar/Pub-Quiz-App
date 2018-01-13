import React, { Component } from 'react';
import Button from './Button';

class AddQuestionButton extends Component {
  render() {
    return(
      <div
        onClick={this.props.addQuestion}
        style={localStyles.button}
        >
          <Button
            text='Add Question'
          />
        </div>
      )
    }
}

const localStyles = {
  button: {
    padding: '20px',
  }
}


export default AddQuestionButton
