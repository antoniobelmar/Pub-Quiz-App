import React, { Component } from 'react';

class AddQuestionButton extends Component {
  render() {
    return(
      <div
        onClick={this.props.addQuestion}
        style={localStyles.button}
        >
          <button> Add Question </button>
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
