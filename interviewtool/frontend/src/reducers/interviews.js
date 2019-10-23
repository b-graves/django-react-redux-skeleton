import { GET_INTERVIEWS, DELETE_INTERVIEW, ADD_INTERVIEW } from "../actions/types.js";

const initialState = {
    interviews: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_INTERVIEWS:
            return {
                ...state,
                interviews: action.payload
            };
        case DELETE_INTERVIEW:
            return {
                ...state,
                interviews: state.interviews.filter(interview => interview.id !== action.payload)
            };
        case ADD_INTERVIEW:
            return {
                ...state,
                interviews: [...state.interviews, action.payload]
            };
        default:
            return state;
    }
}