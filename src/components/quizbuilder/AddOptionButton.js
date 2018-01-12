import React, { Component } from 'react';

class AddOptionButton extends Component {
  render(){
    return(
      <div
      onClick={(event)=> this.props.addOption(this.props.questionIndex, event)}
        >
        <button>Add answer</button>
      </div>
    )
  }
}



export default AddOptionButton;
