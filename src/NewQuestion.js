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
        onClick={(event)=>this.props.removeQuestion(this.props.index, event)}
        >
          <button> X </button>
      </div>
      <div
        onClick={this.props.addQuestion}
        >
          <button> + </button>
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
