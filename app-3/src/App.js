import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      vacationSpot: [
          `San Diego`,
          `St. Simon's Island`,
          `Bend`,
          `Spokane`,
          `Atlanta`,
          `Boston`,
          `Philadelphia`
      ]
    }
  }

  handleChange(value) {
    this.setState({
      userInput: value
    })
  }
    

  render() {
    let vacationSpot = this.state.vacationSpot
    .filter((e, i) => {
      return e.includes(this.state.userInput);
    })
    .map((e, i) => {
      return <h2 key={i}>{e}</h2>
    });

    return (
      <div class='App'>
        <input onChange={e => this.handleChange(e.target.value)}></input>
        <h2>{vacationSpot}</h2>
      </div>

    )
  }
}

export default App;
