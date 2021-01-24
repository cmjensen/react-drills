import React, {Component} from 'react'

class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }

        this.handleAddTask = this.handleAddTask.bind(this)
    }
    
    handleAddTask() {
        this.props.add(this.state.input)
        this.setState({ input: '' })
    }

    handleInput (val) {
        this.setState({input: val})
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    onChange={e => this.handleInput(e.target.value)} 
                    placeholder="Add New Task">
                </input>
                <button 
                    onClick={this.handleAddTask}>Add</button>
            </div>
        )
    }
}

export default NewTask
