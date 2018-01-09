import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props.question.options)
    return(
      <div>
        <p>{this.props.question.text}</p>
        {this.props.question.options.map(function(answer, index){
          return(
            <div key={index}>
              <input type='radio' value={answer} />
              <label>{answer}</label>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Question;
