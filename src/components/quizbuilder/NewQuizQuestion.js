import React, { Component } from 'react';
import NewQuizOption from './NewQuizOption';
import AddOptionButton from './AddOptionButton'
import RemoveQuestionButton from './RemoveQuestionButton'
import NewQuizAnswer from './NewQuizAnswer'
import NewQuizQuestionType from './NewQuizQuestionType'

class NewQuizQuestion extends Component {

  render(){
    return(
      <div>
        <div className='remove-question'>
          <NewQuizQuestionType
            questionIndex={this.props.index}
            handleChangeQuestionType={this.props.handleChangeQuestionType}
          />
          <RemoveQuestionButton
            removeQuestion={this.props.removeQuestion}
            index={this.props.index}
            />
      </div>
        <div style={localStyles.questionRow}>
          <div className='q'>
            {'Q' + (this.props.index + 1)}
          </div>
          <input
            className='new-quiz-borderless-question'
            id='text-input-question'
            type="text"
            placeholder={this.props.question._placeholder}
            value={this.props.question._text}
            onChange={(event)=>this.props.handleChangeQuestion(this.props.index, event)} >
          </input>
        <AddOptionButton
          questionIndex={this.props.index}
          addOption={this.props.addOption}
          />
        </div>
        <div>
          { this.props.question._options.map((option, index) => {
            return (
              <NewQuizOption
                key={index}
                index={index}
                option={option}
                questionIndex={this.props.index}
                handleChangeOption={this.props.handleChangeOption}
                removeOption={this.props.removeOption}
              />
            )
          })}
        </div>
        <div>
          { this.props.question._answer.map((answer, index) => {
            return (
              <NewQuizAnswer
                key={index}
                index={index}
                answer={answer}
                question = {this.props.question}
                options={this.props.question._options}
                questionIndex={this.props.index}
                handleChangeAnswer={this.props.handleChangeAnswer}
              />
            )
          })}
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
  },
}

export default NewQuizQuestion;
