import React, { Component } from 'react';
import NewQuizQuestion from './NewQuizQuestion' ;
import NewQuizName from './NewQuizName';
import AddQuestionButton from './AddQuestionButton';
const Question = {
  placeholder: "Add your question",
  type: '',
  text: '',
  options: [{text: ''}],
  correctAnswer: [{text: ''}]
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
    state.questions.push(JSON.parse((JSON.stringify(Question))))
    this.setState(state)
  }

  removeQuestion = (index, event) => {
    var state = this.state
    state.questions.splice(index,1)
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
          />
        )
      })}
      </div>
    );
  };
};

export default NewQuiz;
