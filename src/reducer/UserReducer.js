import { combineReducers } from 'redux';
import { EDIT_ID, EDIT_KEY } from '../constants/actionTypes';
import { SINGLE_VALUE } from '../constants/componentTypes';

const INITIAL_STATE = {
    id: '',
    apiKey: '',
    data: [
        {
            fieldNumber: 1,
            type: SINGLE_VALUE,
        }
    ],
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