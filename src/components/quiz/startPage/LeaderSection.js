import React, { Component } from 'react';

class LeaderSection extends Component {
  render() {
    return (
      <div className='leader'>
        <h1>You are the leader</h1>
        <input
          className='timer-box'
          placeholder='  Set round time'
          id="timeout-value"
          type="number"
          min="0"
        />
      </div>
    );
  };
};

export default LeaderSection;
