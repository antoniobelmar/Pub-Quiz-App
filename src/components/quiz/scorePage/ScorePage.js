import React, { Component } from 'react';
import ScoreTable from './ScoreTable';

class ScorePage extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Thanks for playing!</h2>
          <h3>Your score was {this.props.score}</h3>
        </div>
        <ScoreTable scores={this.props.scores} />
      </div>
    );
  }
};

export default ScorePage;
