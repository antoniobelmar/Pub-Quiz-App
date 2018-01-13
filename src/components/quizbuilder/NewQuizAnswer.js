import React, { Component } from 'react';

class NewQuizAnswer extends Component {
  render() {
    return(
      <div style={localStyles.answerRow}>
        <div>
          Answer
        </div>
        <div>
          <select
            onChange={(event)=> this.props.handleChangeAnswer(this.props.questionIndex, this.props.index, event)}>
            >
              { this.props.options.map((option, index) => {
                  return (
                    <option key={index} value={option.text}> {option.text} </option>
                  )
                }
              )}
          </select>
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
