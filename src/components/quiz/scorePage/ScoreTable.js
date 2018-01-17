import React, { Component } from 'react';
import TableRow from './TableRow';

class ScoreTable extends Component {
  get scores() {
    return this.props.scores || [];
  };

  render() {
    return (
      this.scores.map(function(team, index) {
        return(
          <TableRow 
            key={index}
            team={team}
          />
        );
      })
    );
  };
};

export default ScoreTable;
