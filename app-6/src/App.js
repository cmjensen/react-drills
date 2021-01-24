import React, {Component} from 'react';
import './App.css';
import List from './Components/List'

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ''
    };

    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleChange (value) {
    this.setState ({
      input: value
    })
  }

  handleAddTask () {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map((elem, i) => {
      return <List key={i} task={elem} />;
    });

    return (
      <div className='App'>
        <h1>My To-Do List:</h1>
        <div>
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)} 
            placeholder="Add New Task">
          </input>
          <button 
            onClick={this.handleAddTask}>Add</button>
        </div>

        {list}
      </div>
    )
  }

 }

export default App;
