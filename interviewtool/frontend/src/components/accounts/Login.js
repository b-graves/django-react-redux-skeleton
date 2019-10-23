import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    render() {
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h2>Login</h2>
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
                    <input type="submit" />
                    Don't have an account? <Link to="/register">Register</Link>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
