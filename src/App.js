import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Galactic Zoo</h2>
        </div>
        <p className="App-intro">
          Imagination - Sharing - Exploration
        </p>
      </div>
    );
  }
}

export default App;
