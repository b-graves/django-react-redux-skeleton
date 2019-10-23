import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addInterview } from "../../actions/interviews"

export class Form extends Component {
    state = {
        name: ''
    }

    static propTypes = {
        addInterview: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const { name } = this.state;
        const interview = { name };
        this.props.addInterview(interview);
        this.setState({
            name: ""
        });
    }

    render() {
        return (
            <div>
                <h1>Add Interview</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.state.name}
                    />
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { addInterview })(Form);
