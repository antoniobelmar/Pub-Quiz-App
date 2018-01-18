import React, { Component } from 'react';
import TableRow from './TableRow';

class ScoreTable extends Component {

  get scores() {
    return this.props.scores || [];
  };

  sortBy(arr, prop) {
    return arr.sort((a, b) => b[prop] - a[prop]);
  }

  maxScore(scores) {
    let array = []
    scores.forEach((score) => {
      array.push(score.score)
    });
    return Math.max(...array)
  }

  render() {
    let maxScore = this.maxScore(this.scores)
    return(
      <table>
        <tbody>
          <tr>
            <th> Team Name </th>
            <th> Score </th>
            <th> Result </th>
          </tr>
          {this.sortBy(this.scores, 'score').map(function(team, index) {
            return(
              <TableRow
                key = {index}
                index = {index}
                teamName = {team.teamName}
                score = {team.score}
                maxScore = {maxScore}
              />
            )
          })}
        </tbody>
      </table>
    );
  };
};

export default ScoreTable;
