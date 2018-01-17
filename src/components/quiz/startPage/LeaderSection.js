import React, { Component } from 'react';

class LeaderSection extends Component {
  render() {
    return (
      <div>
        <h1> You are the leader </h1>
        <input 
          id="timeout-value" 
          type="number" 
          min="0"
        />
      </div>
    );
  };
};

export default LeaderSection;
