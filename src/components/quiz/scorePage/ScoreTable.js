import React, { Component } from 'react';
import TableRow from './TableRow';

class ScoreTable extends Component {

  get scores() {
    return this.props.scores || [];
  };

  sortBy(arr, prop) {
    return arr.sort((a, b) => b[prop] - a[prop]);
  }

  render() {
    return(
      <table>
        <tbody>
          <tr>
            <th> Team Name </th>
            <th> Score </th>
          </tr>
          {this.sortBy(this.scores, 'score').map(function(team, index) {
            return(
              <TableRow
                key = {index}
                index = {index}
                teamName = {team.teamName}
                score = {team.score}
              />
            )
          })}
        </tbody>
      </table>
    );
  };
};

export default ScoreTable;
