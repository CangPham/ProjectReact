import * as types from '../constants/actionTypes';

export default function categoriesReducer(state =  {
    isFetching: false,
    data: [],
    authenticated: false
}, action) {
    switch (action.type) {
        // case types.LOAD_CATEGORY_SUCCESS:
        //     return action.categories;
        case types.CATEGORY_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case types.CATEGORY_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.response.Categories,
                authenticated: action.authenticated || false
            })
        case types.CATEGORY_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            })
        default:
            return state;
    }
}
