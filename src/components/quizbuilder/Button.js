import React, { Component } from 'react';

class Button extends Component {
  render(){
    return(
      <button
        id='general-quiz-button'
        onClick={(event)=> this.props.callback(this.props.arg1, this.props.arg2, event)}
        style={localStyles.button}>
          {this.props.text}
      </button>
    )
  }
};

const localStyles = {
  button: {
    padding: '3px',
  }
}

export default Button;
