import React, { Component } from 'react';

function getCallback(callback) {
  return function onChange(event) {
    return callback(event);
  };
};

class LeaderSection extends Component {
  render() {
    return (
      <div>
        <h1> You are the leader </h1>
        <input type="text" onChange={getCallback(this.props.timeoutCb)} />
      </div>
    );
  };
};

export default LeaderSection;
