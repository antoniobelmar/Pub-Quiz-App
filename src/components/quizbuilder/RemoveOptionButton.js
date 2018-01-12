import React, { Component } from 'react';
class RemoveOptionButton extends Component {
  render() {
    return(
      <div
      onClick={(event)=> this.props.removeOption(this.props.questionIndex, this.props.index, event)}>
        <button>X</button>
      </div>
    )
  }
}


export default RemoveOptionButton;
