import { combineReducers } from 'redux';
import { EDIT_ID } from '../constants/actionTypes';
import { EDIT_KEY } from '../constants/actionTypes';

const INITIAL_STATE = {
    id: '',
    apiKey: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_ID:
        console.log('Edit ID: ' + action.payload);
            return { ...state, id: action.payload };
        case EDIT_KEY:
        return { ...state, apiKey: action.payload };
        default:
            return state
    }
};

export default combineReducers({
    user: userReducer,
});