import { combineReducers } from 'redux';
import interviews from "./interviews";
import errors from "./errors"
import messages from "./messages"
import auth from './auth'

export default combineReducers({
    interviews,
    errors,
    messages,
    auth
});

