import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name) {
                alert(`Name: ${error.msg.name.join()}`)
            }
            if (error.msg.username) {
                alert(error.msg.username.join())
            }
            if (error.msg.non_field_errors) {
                alert(error.msg.non_field_errors.join())
            }
        }
        if (message !== prevProps.message) {
            if (message.deleteInterview) {
                alert(message.deleteInterview);
            }
            if (message.addInterview) {
                alert(message.addInterview);
            }
            if (message.passwordsNotMatch) {
                alert(message.passwordsNotMatch);
            }
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(Alerts)
