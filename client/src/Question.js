import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <p>{this.props.question.text}</p>
        {this.props.question.options.map(function(answer, index){
          return(
            <div key={index}>
              <input type='radio' name='options' value={answer} />
              <label>{answer}</label>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Question;
