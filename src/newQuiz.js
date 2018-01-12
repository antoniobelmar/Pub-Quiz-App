import React, { Component } from 'react';
import NewQuestion from './NewQuestion' ;
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

    this.handleChangeName = this.handleChangeName.bind(this)
  }

  handleChangeName(index, event) {
    var state = this.state
    state[index].name = event.target.value
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

  render() {
    {console.log(this.state)}
    return(
      <div>
      <p>Quiz Name</p>
      <input>  </input>
      {this.state.questions.map((question, index) => {
        return (
          <NewQuestion
            question={question}
            key={index}
            index={index}
            addQuestion={this.addQuestion}
            handleChangeQuestion={this.handleChangeQuestion}
          />
        )
      })}
      </div>
    );
  };
};

export default NewQuiz;
