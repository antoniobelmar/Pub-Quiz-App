import React, { Component } from 'react';

class NewQuizAnswer extends Component {
  render() {
    return(
      <div style={localStyles.answerRow}>
        <div>
          Answer
        </div>
        <div>
        <input
          type='text'
          placeholder={this.props.answer.placeholder}
          value={this.props.answer.text}
          onChange={(event)=> this.props.handleChangeAnswer(this.props.questionIndex, this.props.index, event)}>
        </input>
        </div>
      </div>
    )
  }
}

const localStyles = {
  answerRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
  },
}

export default NewQuizAnswer
