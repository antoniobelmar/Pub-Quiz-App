import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Test />
      </div>
    );
  }
}

export default App;
