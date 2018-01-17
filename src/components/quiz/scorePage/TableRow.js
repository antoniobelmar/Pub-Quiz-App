import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
      <tr key={this.props.index} >
        <td> {this.props.teamName}</td>
        <td> {this.props.score}</td>
      {(this.props.maxScore === this.props.score) &&
        <td>Winner</td>
      }
      {(this.props.maxScore !== this.props.score) &&
        <td>Loser</td>
      }
      </tr>
    );
  };
};

export default TableRow;
