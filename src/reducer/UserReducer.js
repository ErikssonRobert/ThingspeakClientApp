import { combineReducers } from 'redux';

const INITIAL_STATE = {
    id: 'HELLO',
    apiKey: 'WORLD',
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default combineReducers({
    user: userReducer,
});