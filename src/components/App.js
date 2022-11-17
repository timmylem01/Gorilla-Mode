import React, { Component, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dropdown, Option } from './Dropdown';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "" 
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <h1>Which muscle are you interested in?</h1>
        <Dropdown
          formLabel="Choose a muscle"
          buttonText="Send form"
          onChange={this.handleSelect}
          action="/"
        >
          <Option selected value="Click to see options" />
          <Option value="shoulders" />
          <Option value="chest" />
          <Option value="back" />
          <Option value="arms" />
          <Option value="legs" />
        </Dropdown>
        <p>You selected {this.state.value} </p>
      </div>
    );
  }
}

export default App;