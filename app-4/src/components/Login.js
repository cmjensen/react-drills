import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            pass: ''
        }

        this.userLogin = this.userLogin.bind(this);
    }

    updateUser(value) {
        this.setState({
            user: value
        });
    }

    updatePass(value) {
        this.setState({
            pass: value
        });
    }

    userLogin() {
        //there's no context in here for 'this' so it needs to be bound in constructor 
        alert(`Username: ${this.state.user} Password: ${this.state.pass}`);
    }

    render() {
        return (
            <div>
                <input 
                    placeholder='username'
                    onChange={(e) => this.updateUser(e.target.value)}>
                </input>
                <input 
                    placeholder='password'
                    onChange={(e) => this.updatePass(e.target.value)}>
                </input>
                <button onClick={this.userLogin}>Login</button>
            </div>
        )
    }
}

export default Login;