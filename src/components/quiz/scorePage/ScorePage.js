import React, { Component } from 'react';
import ScoreTable from './ScoreTable';

class ScorePage extends Component {
  render() {
    return (
      <div>
        <div className='score-page'>
          <h2>Thanks for playing!</h2>
          <h3>Your score was {this.props.score}/{this.props.questions.length} </h3>
        </div>
        <ScoreTable scores={this.props.scores} />
      </div>
    );
  }
};

export default ScorePage;
