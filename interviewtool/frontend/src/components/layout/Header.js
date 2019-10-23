import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from "../../actions/auth"

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div>
                Welcome {isAuthenticated ? user.username : ""}
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
        const guestLinks = (
            <div>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        )
        return isAuthenticated ? authLinks : guestLinks
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header)
