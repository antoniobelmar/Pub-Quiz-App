import React, { Component } from 'react';
import './Question.css'
import Timer from './Timer.js'

class TextQuestion extends Component {
  render(){
    return(
      <div>
        <div>
          <Timer time={this.props.time} key={this.props.id} />
        </div>
        <div>
          <p className='questionText'>{this.props.question.text}</p>
          <input id='textAnswer' type='text' placeholder='Your answer'/>
        </div>
      </div>
    );
  };
};

export default TextQuestion;
