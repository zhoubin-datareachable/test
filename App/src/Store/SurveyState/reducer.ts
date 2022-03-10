/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin 2021-07-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import * as types from './types';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

const initialState: types.SurveysReducer = {
    verifySurveyNameRequest: {
        data: {}, // Null
        message: '', // display the send code request error message
        isLoading: false, // Null
        status: false, // get verify survey name status
    },
    createSurvey: {
        isOpen: false,
        isLoading: false,
    },
    sort: 'asc',
    surveysCache: {
        surveys: [],
        total_item_numbers: 0,
        last_item_sent: false,
    },
    currentSurveys: {
        surveys: [],
        pageNumber: 0,
        total: 0,
    },
    paginationStatus: true,
    surveysLoading: false,
    emptyInfo: {
        isEmpty: false,
        message: '',
    },
    loadingDeliverable: {
        isLoading: false,
        addOrDelete: true,
    },
    searchCondition: {
        name: '',
        projectName: '',
        startTime: null,
        endTime: null,
    },
    currentSurvey: {
        show: false,
        survey: null,
    },
};

export default (state = initialState, action: types.SurveysActionTypes): types.SurveysReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.UPDATE_SURVEYS_CACHE:
            return {
                ...state,
                surveysCache: action.payload.surveysCache,
            };
        case types.ACTION_TYPE.UPDATE_CURRENT_SURVEYS:
            return {
                ...state,
                currentSurveys: {
                    surveys: [...action.payload.currentSurveys.surveys],
                    pageNumber: action.payload.currentSurveys.pageNumber,
                    total: action.payload.currentSurveys.total,
                },
            };
        case types.ACTION_TYPE.UPDATE_EMPTY_INFO:
            return {
                ...state,
                emptyInfo: action.payload,
            };
        case types.ACTION_TYPE.UPDATE_SURVEYS_LOADING:
            return {
                ...state,
                surveysLoading: action.payload.isLoading,
            };
        case types.ACTION_TYPE.RECORD_VERIFY_SURVEY_NAME_MESSAGE:
            return {
                ...state,
                verifySurveyNameRequest: {
                    ...state.verifySurveyNameRequest,
                    message: action.payload.message,
                    status: action.payload.state,
                },
            };
        case types.ACTION_TYPE.UPDATE_LOADING_DELIVERABLE:
            return {
                ...state,
                loadingDeliverable: {
                    isLoading: action.payload.isLoading,
                    addOrDelete: action.payload.addOrDelete,
                },
            };
        case types.ACTION_TYPE.UPDATE_SEARCH_CONDITIONS:
            return {
                ...state,
                searchCondition: {
                    name: action.payload.name ?? '',
                    projectName: action.payload.projectName ?? '',
                    startTime: action.payload.startTime ?? null,
                    endTime: action.payload.endTime ?? null,
                },
            };
        case types.ACTION_TYPE.CREATE_SURVEY_LOADING:
            return {
                ...state,
                createSurvey: action.payload,
            };
        case types.ACTION_TYPE.UPDATE_SORT_ORDER:
            return {
                ...state,
                sort: action.payload.sort,
            };
        case types.ACTION_TYPE.SET_CURRENT_SURVEY:
            return {
                ...state,
                currentSurvey: action.payload,
            };
        default:
            return state;
    }
};
