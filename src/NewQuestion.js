import React, { Component } from 'react';

class NewQuestion extends Component {
  render(){
    return(
      <div style={localStyles.questionRow}>
        <div>
          {'Q' + (this.props.index + 1)}
        </div>
      <input
        type="text"
        placeholder={this.props.question.placeholder}
        value={this.props.question.text}
        onChange={(event)=>this.props.handleChangeQuestion(this.props.index, event)} >
      </input>
      <div
        onClick={this.props.addQuestion}
        >
          +
      </div>
    </div>
    );
  };
};

const localStyles = {
  questionRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
  }
}

export default NewQuestion;
