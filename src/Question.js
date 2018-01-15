import React, { Component } from 'react';
import './Question.css'

class Question extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
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
    );
  };
};

export default Question;
