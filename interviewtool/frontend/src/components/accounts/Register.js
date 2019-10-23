import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export class Register extends Component {
    state = {
        username: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({passwordsNotMatch: "Passwords do not match"})
        } else {
            const user = { username, password };
            this.props.register(user);
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    render() {
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.onSubmit}>
                    <label>Username</label>
                    <input 
                        type="text"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    <label>Repeat Password</label>
                    <input 
                        type="password"
                        name="password2"
                        onChange={this.onChange}
                        value={this.state.password2}
                    />
                    <input type="submit" />
                    Already have an account? <Link to="/login">Login</Link>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, createMessage })(Register)
