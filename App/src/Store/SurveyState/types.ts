/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin 2021-07-15
 */
/**
 * action types
 */
export enum ACTION_TYPE {
    UPDATE_SURVEYS_CACHE = 'UPDATE_SURVEYS_CACHE',
    UPDATE_CURRENT_SURVEYS = 'UPDATE_CURRENT_SURVEYS',
    GET_SURVEYS = 'GET_SURVEYS',
    CHANGE_PAGE = 'CHANGE_PAGE',
    UPDATE_STAR = 'UPDATE_STAR',
    UPDATE_EMPTY_INFO = 'UPDATE_EMPTY_INFO',
    UPDATE_SURVEYS_LOADING = 'UPDATE_SURVEYS_LOADING',
    UPDATE_SURVEY_NAME = 'UPDATE_SURVEY_NAME',
    RECORD_VERIFY_SURVEY_NAME_MESSAGE = 'RECORD_VERIFY_SURVEY_NAME_MESSAGE',
    CREATE_SURVEY_SAGA = 'CREATE_SURVEY_SAGA',
    ADD_DELIVERABLE_TAG = 'ADD_DELIVERABLE_TAG',
    DELETE_DELIVERABLE_TAG = 'DELETE_DELIVERABLE_TAG',
    UPDATE_LOADING_DELIVERABLE = 'UPDATE_LOADING_DELIVERABLE',
    UPDATE_SEARCH_CONDITIONS = 'UPDATE_SEARCH_CONDITIONS',
    SEARCH_SURVEY = 'SEARCH_SURVEY',
    CREATE_SURVEY_LOADING = 'CREATE_SURVEY_LOADING',
    UPDATE_SORT_ORDER_SAGA = 'UPDATE_SORT_ORDER_SAGA',
    UPDATE_SORT_ORDER = 'UPDATE_SORT_ORDER',
    SET_CURRENT_SURVEY = 'SET_CURRENT_SURVEY',
}

/**
 * survey type
 */
export interface SurveyType {
    survey_name: string;
    survey_dri: string;
    survey_id: string;
    survey_created_time: string;
    survey_creator_name: string;
    deliverable_dri: string;
    deliverable_tags: string[];
    survey_starred: boolean;
    survey_organization_name: string;
    survey_organization_dri: string;
    survey_organization_id: string;
    survey_project_name: string;
    survey_project_dri: string;
    survey_project_id: string;
    survey_question_number: string;
}
/**
 * surveys cache
 */
export interface SurveysCacheType {
    surveys: Array<SurveyType>;
    total_item_numbers: number;
    last_item_sent: boolean;
}

/**
 * current surveys
 */
export interface CurrentSurveysType {
    surveys: Array<SurveyType>;
    pageNumber: number;
    total: number;
}
/**
 * ajax response
 */
interface AjaxResponseStateType {
    data: Record<string, unknown>;
    message: string;
    isLoading: boolean;
    status: boolean;
}
/**
 * create survey parameter
 */
export interface createSurveyParameterType {
    survey_name: string;
    organization_dri: string;
    template_dri?: string;
}
/**
 * search type
 */
export interface SearchType {
    name?: string;
    projectName?: string;
    startTime?: Date | null;
    endTime?: Date | null;
}
/**
 * get surveys saga
 */
export interface GetSurveysSaga {
    type: ACTION_TYPE.GET_SURVEYS;
}
/**
 * update surveys cache action
 */
interface UpdateSurveysCacheAction {
    type: ACTION_TYPE.UPDATE_SURVEYS_CACHE;
    payload: {
        surveysCache: SurveysCacheType;
    };
}

/**
 * update current surveys
 */
interface UpdateCurrentSurveysAction {
    type: ACTION_TYPE.UPDATE_CURRENT_SURVEYS;
    payload: {
        currentSurveys: CurrentSurveysType;
    };
}
/**
 * change page number
 */
export interface ChangePageNumberSaga {
    type: ACTION_TYPE.CHANGE_PAGE;
    payload: {
        pageNumber: number;
    };
}
/**
 * update survey start
 */
export interface UpdateSurveyStarSaga {
    type: ACTION_TYPE.UPDATE_STAR;
    payload: {
        survey_dri: string;
        star: number;
    };
}
/**
 * update empty info
 */
interface UpdateEmptyInfo {
    type: ACTION_TYPE.UPDATE_EMPTY_INFO;
    payload: {
        isEmpty: boolean;
        message: string;
    };
}
/**
 * update surveys loading
 */
interface UpdateSurveyLoading {
    type: ACTION_TYPE.UPDATE_SURVEYS_LOADING;
    payload: {
        isLoading: boolean;
    };
}
/**
 * update survey name
 */
export interface UpdateSurveyNameSaga {
    type: ACTION_TYPE.UPDATE_SURVEY_NAME;
    payload: {
        survey_dri: string;
        survey_new_name: string;
    };
}
/**
 * set verify survey name message
 */
interface SetVerifySurveyNameMessageAction {
    type: ACTION_TYPE.RECORD_VERIFY_SURVEY_NAME_MESSAGE;
    payload: { message: string; state: boolean };
}

/**
 * create survey
 */
export interface CreateSurveySaga {
    type: ACTION_TYPE.CREATE_SURVEY_SAGA;
    payload: {
        data: createSurveyParameterType;
    };
}

/**
 * add deliverable tag
 */
export interface AddDeliverableTag {
    type: ACTION_TYPE.ADD_DELIVERABLE_TAG;
    payload: {
        deliverable_dri: string;
        tag_to_be_added: string;
    };
}

/**
 * delete deliverable tag
 */
export interface DeleteDeliverableTag {
    type: ACTION_TYPE.DELETE_DELIVERABLE_TAG;
    payload: {
        deliverable_dri: string;
        tag_to_be_deleted: string;
    };
}
/**
 * update  loading deliverable
 */
interface UpdateLoadingDeliverable {
    type: ACTION_TYPE.UPDATE_LOADING_DELIVERABLE;
    payload: {
        isLoading: boolean;
        addOrDelete: boolean;
    };
}
/**
 * search survey saga
 */
export interface SearchSurveySaga {
    type: ACTION_TYPE.SEARCH_SURVEY;
    payload: SearchType;
}
/**
 * update search condition
 */
interface UpdateSearchConditions {
    type: ACTION_TYPE.UPDATE_SEARCH_CONDITIONS;
    payload: SearchType;
}
/**
 * update create survey loading
 */
interface UpdateCreateSurveyBox {
    type: ACTION_TYPE.CREATE_SURVEY_LOADING;
    payload: {
        isOpen: boolean;
        isLoading: boolean;
    };
}
/**
 * update sort order saga
 */
export interface UpdateSortOrderSaga {
    type: ACTION_TYPE.UPDATE_SORT_ORDER_SAGA;
    payload: {
        sort: 'asc' | 'dsc';
    };
}
/**
 * update sort order
 */
interface UpdateSortOrder {
    type: ACTION_TYPE.UPDATE_SORT_ORDER;
    payload: {
        sort: 'asc' | 'dsc';
    };
}

/**
 * set current survey
 */
interface SetCurrentSurvey {
    type: ACTION_TYPE.SET_CURRENT_SURVEY;
    payload: {
        show: boolean;
        survey: SurveyType | null;
    };
}
/**
 * surveys reducer
 */
export interface SurveysReducer {
    surveysCache: SurveysCacheType;
    currentSurveys: CurrentSurveysType;
    paginationStatus: boolean;
    surveysLoading: boolean;
    emptyInfo: {
        isEmpty: boolean;
        message: string;
    };
    createSurvey: {
        isOpen: boolean;
        isLoading: boolean;
    };

    verifySurveyNameRequest: AjaxResponseStateType;
    loadingDeliverable: {
        isLoading: boolean;
        addOrDelete: boolean;
    };
    searchCondition: {
        name: string;
        projectName: string;
        startTime: Date | null;
        endTime: Date | null;
    };
    sort: 'asc' | 'dsc';
    currentSurvey: {
        show: boolean;
        survey: SurveyType | null;
    };
}
/**
 * surveys actionType
 */
export type SurveysActionTypes =
    | UpdateSurveysCacheAction
    | UpdateCurrentSurveysAction
    | GetSurveysSaga
    | ChangePageNumberSaga
    | UpdateSurveyStarSaga
    | UpdateEmptyInfo
    | UpdateSurveyLoading
    | UpdateSurveyNameSaga
    | SetVerifySurveyNameMessageAction
    | CreateSurveySaga
    | AddDeliverableTag
    | DeleteDeliverableTag
    | UpdateLoadingDeliverable
    | UpdateSearchConditions
    | SearchSurveySaga
    | UpdateCreateSurveyBox
    | UpdateSortOrderSaga
    | UpdateSortOrder
    | SetCurrentSurvey;
