/**
 * @file
 * @date 2021-10-26
 * @author zhoubin
 * @lastModify zhoubin 2021-10-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import * as types from './types';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

const initialState: types.CategoryReducer = {
    category: {
        all: 0,
        projectRelated: 0,
        starred: 0,
        unbound: 0,
    },
    currentCategory: 'all',
    isLoading: false,
};
export default (state = initialState, action: types.CategoryActionTypes): types.CategoryReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.UPDATE_CATEGORY:
            return {
                ...state,
                category: action.payload.category,
            };
        case types.ACTION_TYPE.UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload.currentCategory,
            };
        case types.ACTION_TYPE.UPDATE_LOADING:
            return {
                ...state,
                isLoading: action.payload.loading,
            };
        default:
            return state;
    }
};
