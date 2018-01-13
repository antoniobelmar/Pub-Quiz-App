import React, { Component } from 'react';
import NewQuizQuestion from './NewQuizQuestion' ;
import NewQuizName from './NewQuizName';
import AddQuestionButton from './AddQuestionButton';
const Option = {
  text: '',
  placeholder: 'Add an answer option'
}

var Question = {
  placeholder: "Add your question",
  type: '',
  text: '',
  options: [Option],
  answer: [{text: ''}]
}


class NewQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      placeholder: "Type your quiz name",
      questions: [Question]
    }
  }

  handleChangeName = (event) => {
    var state = this.state
    state.name = event.target.value
    this.setState(state)
  }

  handleChangeQuestion = (index, event) => {
    var state = this.state
    state.questions[index].text = event.target.value
    this.setState(state)
  }

  addQuestion = () => {
    var state = this.state
    state.questions.push(JSON.parse(JSON.stringify(Question)))
    this.setState(state)
  }

  removeQuestion = (index, event) => {
    var state = this.state
    state.questions.splice(index,1)
    this.setState(state)
  }

  handleChangeOption = (questionIndex, index, event) => {
    var state = this.state
    state.questions[questionIndex].options[index].text = event.target.value
    this.setState(state)
  }

  addOption = (questionIndex) => {
    var state = this.state
    state.questions[questionIndex].options.push(JSON.parse(JSON.stringify(Option)))
    this.setState(state)
  }

  removeOption = (questionIndex, index, event) => {
    var state = this.state
    state.questions[questionIndex].options.splice(index, 1)
    this.setState(state)
  }

  handleChangeAnswer = (questionIndex, index, event) => {
    var state = this,state
    state.questions[questionIndex].answer[index].text = event.target.value
    this.setState(state)
  }

  render() {
    {console.log(this.state)}
    return(
      <div>
      <NewQuizName
        name={this.state.name}
        placeholder={this.state.placeholder}
        handleChangeName = {this.handleChangeName}
      />
      <AddQuestionButton
        addQuestion={this.addQuestion}
      />
      {this.state.questions.map((question, index) => {
        return (
          <NewQuizQuestion
            question={question}
            key={index}
            index={index}
            handleChangeQuestion={this.handleChangeQuestion}
            removeQuestion={this.removeQuestion}
            handleChangeOption={this.handleChangeOption}
            addOption={this.addOption}
            removeOption={this.removeOption}
          />
        )
      })}
      </div>
    );
  };
};

export default NewQuiz;
