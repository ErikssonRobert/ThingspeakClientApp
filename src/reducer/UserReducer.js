import { combineReducers } from 'redux';
import { EDIT_ID, EDIT_KEY, ADD_COMPONENT, SAVE_DATA, EDIT_NEW_DATA } from '../constants/actionTypes';

const INITIAL_STATE = {
    id: '',
    apiKey: '',
    data: [],
    newData: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_ID:
        console.log('Edit ID: ' + action.payload);
            return { ...state, id: action.payload };
        case EDIT_KEY:
            return { ...state, apiKey: action.payload };
        case ADD_COMPONENT:
            return Object.assign({}, state, {
                data: [
                    ...state.data,
                    {
                        fieldNumber: action.payload.fieldNumber,
                        type: action.payload.type
                    }
                ]
            });
        case SAVE_DATA:
            return { ...state, data: action.payload};
        case EDIT_NEW_DATA:
            return { ...state, newData: action.payload };
        default:
            return state
    }
};

export default combineReducers({
    user: userReducer,
});