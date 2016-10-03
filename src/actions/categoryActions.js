import * as types from '../constants/actionTypes';
import categoryApi from '../api/mockCourseApi';

export function loadCategoriesSuccess(categories) {
    return {type: types.LOAD_CATEGORY_SUCCESS, categories}
}

export function loadCategories() {
    return function (dispatch) {
        return categoryApi.getAllCategories().then( categories => {
            dispatch(loadCategoriesSuccess(categories));
            }).catch(error =>{
                throw (error);
        })
    }
}
