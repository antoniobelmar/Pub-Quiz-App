import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    console.log(props);
    super(props);
    this.state = { time: 0 };
  };

  componentWillMount() {
    let state = this.state;
    state.time = this.props.time / 1000
    this.setState(state);
  };

  componentDidMount() {
    this.interval = setInterval(this.getTick(this), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  getTick(self) {
    return function tick() {
      let state = self.state;
      state.time = Math.max(state.time - 1, 0);
      self.setState(state);
    };
  }

  render() {
    return (
      <div className='timer'>
        <p>Time remaining: </p>
        <p>{this.state.time}</p>
      </div>
    );
  };
};

export default Timer;
