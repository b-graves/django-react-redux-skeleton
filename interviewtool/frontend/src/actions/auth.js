import axios from 'axios';
import { returnErrors } from './messages';
import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING })

    axios.get('api/auth/user', tokenConfig(getState))
        .then(res => {
            if (res.data.id !== null) {
                dispatch({
                    type: USER_LOADING,
                    payload: res.data
                });
            } else {
                dispatch(returnErrors("No user"));
                dispatch({
                    type: AUTH_ERROR
                });
            }
        }).catch(err => {
            dispatch(returnErrors(err.response.data));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

// Login
export const login = (username, password) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({ username, password });

    axios.post('api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data));
            dispatch({
                type: LOGIN_FAIL
            });
        });
}

// Register user
export const register = ({ username, password }) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({ username, password });

    axios.post('api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}

// Logout
export const logout = () => (dispatch, getState) => {
    axios.post('api/auth/logout', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data));
        });
}

// Setup config with token - helper function
export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config
}