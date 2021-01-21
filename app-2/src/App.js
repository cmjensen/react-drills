import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      famBam: ['kason', 'nathan', 'christie', 'lizzie', 'katie', 'junie', 'adam']
    }
  }

  render() {
    let famBam = this.state.famBam.map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });

    return (
      <div className='App'>{famBam}</div>
    )
  }
}

export default App;
