import React, {Component} from 'react';

class QuizList extends Component {
  render() {
    return(
      <div>
        {this.props.quizzes.map((quiz, index) => {
          return(
            <a key={index} href={'/quiz/' + quiz.id}>
              <li>{quiz.name}</li>
            </a>
          )
        })}
      </div>
    )
  }
}

export default QuizList
