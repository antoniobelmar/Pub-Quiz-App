import React, {Component} from 'react';

class QuizList extends Component {
  render() {
    return(
      <div>
        {this.props.quizzes.map((quiz, index) => {
          return(
            <div key={index}>
              <a href={'/quiz/' + quiz.id}>
                <li>{quiz.name}</li>
              </a>
              <button
                onClick={(event) => this.props.handleClickDeleteQuiz(quiz.id)}>
                Delete Quiz
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default QuizList
