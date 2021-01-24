import React, {Component} from 'react';
import ToDo from './ToDo';

class List extends Component {
    render() {
        let list = this.props.tasks.map((elem, i) => {
            return <ToDo key={i} task={elem} />
        });

        return (
            <div>{list}</div>
        )
    }
}

export default List