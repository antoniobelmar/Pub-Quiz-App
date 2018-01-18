import React, { Component } from 'react';

class Button extends Component {
  render(){
    return(
      <button
        className='all-buttons'
        id='general-quiz-button'
        onClick={(event)=> this.props.callback(this.props.arg1, this.props.arg2, event)}>
          {this.props.text}
      </button>
    )
  }
};

export default Button;
