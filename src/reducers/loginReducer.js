import * as types from '../constants/actionTypes';

function reducer (state = [], action) {
    switch (action.type) {
        case types.SET_AUTH:
            return action.data;

        default:
            return state
    }
}

export default reducer