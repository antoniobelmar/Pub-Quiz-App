import React, { Component } from 'react';
import NewQuizOption from './NewQuizOption';
import AddOptionButton from './AddOptionButton'

class NewQuizQuestion extends Component {

  render(){
    return(
      <div>
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
        <AddOptionButton
          questionIndex={this.props.index}
          addOption={this.props.addOption}
        />
      </div>
      <div>
        { this.props.question.options.map((option, index) => {
            return (
              <NewQuizOption
              key={index}
              index={index}
              option={option}
              questionIndex={this.props.index}
              handleChangeOption={this.props.handleChangeOption}
              />
            )
          }
        )}
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
