import React, { Component } from 'react';
import './Question.css'

class TextQuestion extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <p className='questionText'>{this.props.question.text}</p>
            <div>
              <input type='text' placeholder='Your answer'/>
            </div>
      </div>
    );
  };
};

export default TextQuestion;
