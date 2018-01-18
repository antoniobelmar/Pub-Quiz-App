import React, {Component} from 'react';

class QuizList extends Component {
  render() {
    return(
      <div>
        {this.props.quizzes.map((quiz, index) => {
          return(
            <div key={index}>
              <a href={'/quiz/' + quiz.id}>
                <button
                  className='quiz-name-button'>
                  {quiz.name}</button>
              </a>
              <button
                className='delete-button'
                onClick={(event) => this.props.handleClickDeleteQuiz(quiz.id)}>
                X
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default QuizList
