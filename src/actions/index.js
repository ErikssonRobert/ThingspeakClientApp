import { EDIT_ID } from '../constants/actionTypes';
import { EDIT_KEY } from '../constants/actionTypes';

export function editId(payload) {
    return { type: EDIT_ID, payload }
};

export function editKey(payload) {
    return { type: EDIT_KEY, payload }
};