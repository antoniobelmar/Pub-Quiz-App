import React, { Component } from 'react';

class NewQuizQuestionType extends Component {
  render() {
    return(
      <div style={localStyles.questionTypeRow}>
        <div>
          Question Type
        </div>
        <div>
          <select
            className="select-box"
            onChange={(event)=> this.props.handleChangeQuestionType(this.props.questionIndex, event)}
            required='true'
            >
              <option selected="selected" disabled="disabled">Select question type &#8964;</option>
              <option value='MultipleChoice'> Multiple Choice </option>
              <option value='text'> Text </option>
            </select>
        </div>
      </div>
    )
  }
}

const localStyles = {
  questionTypeRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
  },
}

export default NewQuizQuestionType
