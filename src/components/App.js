import React, { Component, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dropdown, Option } from './Dropdown';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "",
      example: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/api/" + this.state.value;
    // console.log(url);
    // console.log(this.state.value);
    fetch(url)
    .then((result) => result.json())
    .then((data) => {
      const newArr = [];
      for(let i = 0; i < data.length; i++) {
        newArr.push(<h4>{data[i].workout}</h4>);
        newArr.push(<p>Difficulty: {data[i].difficulty}</p>);
        newArr.push(<p>Sets: {data[i].sets}</p>);
        newArr.push(<p>Reps: {data[i].reps}</p>);
        newArr.push(<p>Description: {data[i].description}</p>);
        newArr.push(<p>Example: {data[i].example}</p>);
      }
      this.setState({ example: newArr })
    })
    
  }

  render() {
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu_-boykYmG62oAQ2A1gck0RYouuZumsDog&usqp=CAU"></img>
        <h1>Which muscle are you interested in?</h1>
        <Dropdown
          formLabel="Choose a muscle"
          buttonText="Send form"
          onChange={this.handleSelect}
          onSubmit={this.handleSubmit}
        >
          <Option selected value="Click to see options" />
          <Option value="shoulders" />
          <Option value="chest" />
          <Option value="back" />
          <Option value="arms" />
          <Option value="legs" />
        </Dropdown>
        {/* <p>You selected: {this.state.value} </p> */}
        <div id="info">
            <h3>Results</h3>
            <p>{this.state.example}</p>
        </div>
      </div>
    );
  }
}

export default App;