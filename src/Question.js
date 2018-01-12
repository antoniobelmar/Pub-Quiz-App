import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <p>{this.props.question.text}</p>
        {this.props.question.options.map(function(answer, index){
          return(
            <div class='option' key={index}>
              <input id={answer} type='radio' name='options' value={answer} />
              <label for={answer}>{answer}</label>
            </div>
          )
        })}
      </div>
    );
  };
};

export default Question;