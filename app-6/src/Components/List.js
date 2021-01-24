import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <p>{this.props.task}</p>
        )
    }
}

export default List;