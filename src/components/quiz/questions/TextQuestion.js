import React, { Component } from 'react';
import Timer from './Timer.js'

class TextQuestion extends Component {
  render(){
    return(
      <div className="col-sm-8 col-sm-offset-2">
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
