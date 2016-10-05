import * as types from '../constants/actionTypes';
import { CALL_API } from '../middleware/api';


// Uses the API middlware to get a category
export function fetchCategories() {
    return {
        [CALL_API]: {
            endpoint: 'categories/getList.json',
            types: [types.CATEGORY_REQUEST, types.CATEGORY_SUCCESS, types.CATEGORY_FAILURE]
        }
    }
}

// Same API middlware is used to get a
// secret category, but we set authenticated
// to true so that the auth header is sent
export function fetchSecretCategories() {
    return {
        [CALL_API]: {
            endpoint: 'categories/getList.json',
            authenticated: true,
            types: [types.CATEGORY_REQUEST, types.CATEGORY_SUCCESS, types.CATEGORY_FAILURE]
        }
    }
}

