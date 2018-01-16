import React, { Component } from 'react';

class NewQuizName extends Component {
  render(){
    return(
      <div >
        <h1> Quiz Name </h1>
        <input
          type="text"
          className="input-field"
          placeholder={this.props.placeholder}
          value={this.props.name}
          onChange={(event) => this.props.handleChangeName(event)}
          >
        </input>
      </div>
    );
  };
};

export default NewQuizName;
