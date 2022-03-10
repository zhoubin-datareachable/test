/**
 * @file
 * @date 2021-10-26
 * @author zhoubin
 * @lastModify zhoubin 2021-10-26
 */
import * as types from './types';
/**
 * update category
 */
const updateCategory = (category: types.CategoryType): types.CategoryActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CATEGORY,
        payload: { category },
    };
};
/**
 * update current category saga
 */
const updateCurrentCategorySaga = (currentCategory: string): types.CategoryActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_CATEGORY_SAGA,
        payload: { currentCategory },
    };
};
/**
 * update current category
 */
const updateCurrentCategory = (currentCategory: string): types.CategoryActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_CATEGORY,
        payload: { currentCategory },
    };
};

/**
 * update category number
 */
const updateNumberSaga = (): types.CategoryActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_NUMBER_SAGA1,
    };
};

/**
 * change loading
 */
const uploadLoading = (loading: boolean): types.CategoryActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_LOADING,
        payload: {
            loading,
        },
    };
};
export { updateCategory,updateCurrentCategorySaga, updateCurrentCategory, updateNumberSaga, uploadLoading };
