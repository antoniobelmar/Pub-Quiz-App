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
        {this.props.question.options.map(function(answer, index){
          return(
            <div className='option' key={index}>
              <input id={answer} type='radio' name='options' value={answer} />
              <label htmlFor={answer}>{answer}</label>
            </div>
          )
        })}
      </div>
    );
  };
};

export default Question;
