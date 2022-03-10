/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin 2021-07-15
 */
import * as types from './types';

/**
 * update surveys cache action
 */
const updateSurveysCacheAction = (
    surveysCache: types.SurveysCacheType,
): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_SURVEYS_CACHE,
        payload: {
            surveysCache,
        },
    };
};

/**
 * update current surveys
 */
const updateCurrentSurveysAction = (
    currentSurveys: types.CurrentSurveysType,
): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_SURVEYS,
        payload: {
            currentSurveys,
        },
    };
};

/**
 * get surveys saga
 */
const getSurveysSaga = (): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.GET_SURVEYS,
    };
};

/**
 * change page number
 */
const changePageNumberSaga = (pageNumber: number): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.CHANGE_PAGE,
        payload: {
            pageNumber,
        },
    };
};
/**
 * update survey start
 */
const updateSurveyStarSaga = (survey_dri: string, star: number): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_STAR,
        payload: {
            survey_dri,
            star,
        },
    };
};

/**
 * update empty info
 */
const updateEmptyInfo = (isEmpty: boolean, message: string): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_EMPTY_INFO,
        payload: {
            isEmpty,
            message,
        },
    };
};

/**
 * update surveys loading
 */
const updateSurveyLoading = (isLoading: boolean): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_SURVEYS_LOADING,
        payload: {
            isLoading,
        },
    };
};

/**
 * update survey name
 */
const updateSurveyNameSaga = (
    survey_dri: string,
    survey_new_name: string,
): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_SURVEY_NAME,
        payload: {
            survey_dri,
            survey_new_name,
        },
    };
};

/**
 * set verify survey name message
 */
const setVerifySurveyNameMessage = (message: string, state: boolean): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.RECORD_VERIFY_SURVEY_NAME_MESSAGE,
        payload: { message, state },
    };
};
/**
 * create survey
 */
const createSurveySaga = (data: types.createSurveyParameterType): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.CREATE_SURVEY_SAGA,
        payload: {
            data,
        },
    };
};

/**
 * add deliverable tag
 */
const addDeliverableTag = (
    deliverable_dri: string,
    tag_to_be_added: string,
): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.ADD_DELIVERABLE_TAG,
        payload: {
            deliverable_dri,
            tag_to_be_added,
        },
    };
};

/**
 * delete deliverable tag
 */
const deleteDeliverableTag = (
    deliverable_dri: string,
    tag_to_be_deleted: string,
): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.DELETE_DELIVERABLE_TAG,
        payload: {
            deliverable_dri,
            tag_to_be_deleted,
        },
    };
};

/**
 * update  loading deliverable
 */
const updateLoadingDeliverable = (
    isLoading: boolean,
    addOrDelete: boolean,
): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_LOADING_DELIVERABLE,
        payload: {
            isLoading,
            addOrDelete,
        },
    };
};

/**
 * search survey saga
 */
const searchSurveySaga = (data: types.SearchType): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.SEARCH_SURVEY,
        payload: data,
    };
};

/**
 * update search condition
 */
const updateSearchConditions = (data: types.SearchType): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_SEARCH_CONDITIONS,
        payload: data,
    };
};

/**
 * update create survey loading
 */

const updateCreateSurveyBox = (isOpen: boolean, isLoading: boolean): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.CREATE_SURVEY_LOADING,
        payload: {
            isOpen,
            isLoading,
        },
    };
};

/**
 * update sort order saga
 */
const updateSortOrderSaga = (sort: 'asc' | 'dsc'): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_SORT_ORDER_SAGA,
        payload: {
            sort,
        },
    };
};
/**
 * update sort order
 */
const updateSortOrder = (sort: 'asc' | 'dsc'): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_SORT_ORDER,
        payload: {
            sort,
        },
    };
};

/**
 * set current survey
 */
const setCurrentSurvey = (
    show: boolean,
    survey: types.SurveyType | null,
): types.SurveysActionTypes => {
    return {
        type: types.ACTION_TYPE.SET_CURRENT_SURVEY,
        payload: {
            show,
            survey,
        },
    };
};
export {
    updateSurveysCacheAction,
    updateCurrentSurveysAction,
    getSurveysSaga,
    changePageNumberSaga,
    updateSurveyStarSaga,
    updateEmptyInfo,
    updateSurveyLoading,
    updateSurveyNameSaga,
    setVerifySurveyNameMessage,
    createSurveySaga,
    addDeliverableTag,
    deleteDeliverableTag,
    updateLoadingDeliverable,
    updateSearchConditions,
    searchSurveySaga,
    updateCreateSurveyBox,
    updateSortOrderSaga,
    updateSortOrder,
    setCurrentSurvey,
};
