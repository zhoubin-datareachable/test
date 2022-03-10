/**
 * @file
 * @date 2021-10-26
 * @author zhoubin
 * @lastModify zhoubin 2021-10-26
 */
/**
 * action types
 */
export enum ACTION_TYPE {
    UPDATE_CATEGORY = 'UPDATE_CATEGORY',
    UPDATE_CURRENT_CATEGORY_SAGA = 'UPDATE_CURRENT_CATEGORY_SAGA',
    UPDATE_CURRENT_CATEGORY = 'UPDATE_CURRENT_CATEGORY',
    UPDATE_NUMBER_SAGA1 = 'UPDATE_NUMBER_SAGA1',
    UPDATE_LOADING = 'UPDATE_LOADING',
}
/**
 * category type
 */
export interface CategoryType {
    all: number;
    projectRelated: number;
    starred: number;
    unbound: number;
}

/**
 * update category
 */
interface UpdateCategoryAction {
    type: ACTION_TYPE.UPDATE_CATEGORY;
    payload: { category: CategoryType };
}
/**
 * update current category saga
 */
export interface UpdateCurrentCategorySaga {
    type: ACTION_TYPE.UPDATE_CURRENT_CATEGORY_SAGA;
    payload: { currentCategory: string };
}
/**
 * update current category
 */
interface UpdateCurrentCategory {
    type: ACTION_TYPE.UPDATE_CURRENT_CATEGORY;
    payload: { currentCategory: string };
}

/**
 * update category number
 */
export interface UpdateNumberSaga {
    type: ACTION_TYPE.UPDATE_NUMBER_SAGA1;
}
/**
 * change loading
 */
interface UploadLoading {
    type: ACTION_TYPE.UPDATE_LOADING;
    payload: {
        loading: boolean;
    };
}
/**
 * category reducer
 */
export interface CategoryReducer {
    category: CategoryType;
    currentCategory: string;
    isLoading: boolean;
}

/**
 * category actionType
 */
export type CategoryActionTypes =
    | UpdateCategoryAction
    | UpdateCurrentCategorySaga
    | UpdateCurrentCategory
    | UpdateNumberSaga
    | UploadLoading;
