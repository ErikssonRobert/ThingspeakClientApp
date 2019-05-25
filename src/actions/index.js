import { EDIT_ID, EDIT_KEY, ADD_COMPONENT, SAVE_DATA, EDIT_NEW_DATA } from '../constants/actionTypes';

export function editId(payload) {
    return { type: EDIT_ID, payload }
};

export function editKey(payload) {
    return { type: EDIT_KEY, payload }
};

export function addComponent(payload) {
    return {type: ADD_COMPONENT, payload}
};

export function saveStoredData(payload) {
    return {type: SAVE_DATA, payload}
};

export function editNewData(payload) {
    return {type: EDIT_NEW_DATA, payload}
};