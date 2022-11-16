import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Let's Go</h1>
        <p>What are we working out today?</p>
        <input placeholder='Please enter a muscle group..'></input>
        <button>Go!</button>
      </div>
    )
  }
}

export default App;