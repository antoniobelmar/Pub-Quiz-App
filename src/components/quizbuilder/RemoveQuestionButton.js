import React, { Component } from 'react';
class RemoveQuestionButton extends Component {
  render() {
    return(
      <div
        onClick={(event)=>this.props.removeQuestion(this.props.index, event)}
        >
          <button> X </button>
      </div>
    )
  }
}


export default RemoveQuestionButton;
