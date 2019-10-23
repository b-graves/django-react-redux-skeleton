import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_INTERVIEWS, DELETE_INTERVIEW, ADD_INTERVIEW } from './types';

// GET INTERVIEWS
export const getInterviews = () => (dispatch, getState) => {
    axios
        .get('/api/interviews/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_INTERVIEWS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// DELETE INTERVIEW
export const deleteInterview = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/interviews/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteInterview: "Interview Deleted" }));
            dispatch({
                type: DELETE_INTERVIEW,
                payload: id
            });
        });
}

// ADD INTERVIEW
export const addInterview = (interview) => (dispatch, getState) => {
    axios
        .post('/api/interviews/', interview, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addInterview: "Interview Added" }));
            dispatch({
                type: ADD_INTERVIEW,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}