import React, { Component } from 'react';

class NewQuizOption extends Component {
  render() {
    return (
      <div>
        <div>
          {'A' + (this.props.index + 1)}
        </div>
        <input
        type='text'
        placeholder={this.props.placeholder}
        value={this.props.text}>
        </input>
      </div>
    )
  }
}



export default NewQuizOption;
