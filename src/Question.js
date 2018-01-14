import React, { Component } from 'react';
import './Question.css'

class Question extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <p className='questionText'>{this.props.question._text}</p>
        {this.props.question._options.map(function(option, index){
          return(
            <div className='option' key={index}>
              <input id={option._text} type='radio' name='options' value={option._text} />
              <label htmlFor={option._text}>{option._text}</label>
            </div>
          )
        })}
      </div>
    );
  };
};

export default Question;
