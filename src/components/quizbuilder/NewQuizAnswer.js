import React, { Component } from 'react';

class NewQuizAnswer extends Component {
  render() {
    return(
      <div style={localStyles.answerRow}>
        <div className='answer'>
          Answer
        </div>
        <div>
          <select
            multiple='multiple'
            onChange={(event)=> this.props.handleChangeAnswer(this.props.questionIndex, this.props.index, event)}
            required='true'
            >
              <option selected="selected" disabled="disabled">Select the correct answer</option>
              { this.props.options.map((option, index) => {
                  return (
                    <option key={index} value={option._text}> {option._text} </option>
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
