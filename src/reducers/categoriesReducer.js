import * as types from '../constants/actionTypes';

export default function categoriesReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_CATEGORY_SUCCESS:
            return action.categories;
        default:
            return state;
    }
}
