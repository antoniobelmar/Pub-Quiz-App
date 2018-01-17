import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    let team = this.props.team;

    return (
      <div>
        <h4>{team.teamName}: {team.score}</h4>
      </div>
    );
  };
};

export default TableRow;
