import React, { Component } from 'react';
import './Question.css'
import Timer from './Timer.js'

class MCQuestion extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <div>
          <Timer time={this.props.time} key={this.props.id} />
        </div>
        <div>
          <p className='questionText'>{this.props.question.text}</p>
          {this.props.question.options.map(function(option, index){
            return(
              <div className='option' key={index}>
                <input id={option.text} type='radio' name='options' value={option.text} />
                <label htmlFor={option.text}>{option.text}</label>
            </div>
            )
          })}
        </div>
      </div>
    );
  };
};

export default MCQuestion;
