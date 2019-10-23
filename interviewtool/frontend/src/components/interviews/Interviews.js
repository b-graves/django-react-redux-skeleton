import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInterviews, deleteInterview } from '../../actions/interviews'

export class Interviews extends Component {
    static propTypes = {
        interviews: PropTypes.array.isRequired,
        getInterviews: PropTypes.func.isRequired,
        deleteInterview: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getInterviews();
    }

    render() {
        return (
            <Fragment>
                <h2>Interviews</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.interviews.map(interview => (
                            <tr>
                                <td>{interview.name}</td>
                                <td>
                                    <button onClick={this.props.deleteInterview.bind(this, interview.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    interviews: state.interviews.interviews
});

export default connect(mapStateToProps, { getInterviews, deleteInterview })(Interviews)
