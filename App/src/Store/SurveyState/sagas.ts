/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { RootState } from '../rootReducer';
import { fork, takeLatest, put, select, call, throttle, delay } from 'redux-saga/effects';
import { addDeliverableTag, deleteDeliverableTag } from '~/Api/survey';
import { getAllSurveyByClient, getProjectRelatedSurveyByClient } from '~/Api/survey';
import { getStarredSurveyByClient, getUnBoundSurveyByClient } from '~/Api/survey';
import { getAllSurveyBySupplier, getProjectRelatedSurveyBySupplier } from '~/Api/survey';
import { getStarredSurveyBySupplier, checkSurveyNameExists } from '~/Api/survey';
import { starSurvey, surveyRename, createSurvey } from '~/Api/survey';
import { AjaxResponse } from '~/Api/login';
import { CategoryType } from '../CategoryState/types';
import { notice } from '@datareachable/dr_front_componentlibrary';
import * as categoryActions from '../CategoryState/actions';
import * as types from './types';
import * as actions from './actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
const clientApi = {
    all: getAllSurveyByClient,
    projectRelated: getProjectRelatedSurveyByClient,
    starred: getStarredSurveyByClient,
    unbound: getUnBoundSurveyByClient,
};

const supplierApi = {
    all: getAllSurveyBySupplier,
    projectRelated: getProjectRelatedSurveyBySupplier,
    starred: getStarredSurveyBySupplier,
};
/**
 * get surveys
 */
function* handleGetSurveys() {
    yield put(actions.updateEmptyInfo(false, ''));
    yield put(actions.updateSurveyLoading(true));
    const { organization_dri } = yield select(
        (state: RootState) => state.organizationState.currentOrg,
    );
    const role = yield select((state: RootState) => state.userState.userRole);
    const category: string = yield select(
        (state: RootState) => state.categoryState.currentCategory,
    );
    const talent_group_dri = yield select(
        (state: RootState) => state.talentGroupState.currentTalentGroupDri,
    );
    const project_dri = yield select(
        (state: RootState) => state.projectState.currentProject.project_dri,
    );
    const Api = role === 'client' ? clientApi : supplierApi;
    const args = Object.assign(
        {
            organization_dri,
            item_start_number: 1,
            request_item_number: 1000,
        },
        talent_group_dri && { talent_group_dri },
        category === 'projectRelated' && project_dri && { project_dri },
    );

    const res: AjaxResponse<types.SurveysCacheType> = yield call(Api[category], args);
    if (res.status !== 200) {
        notice.error({
            title: 'rename failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }
    const surveysCache = res.data.data;
    while (surveysCache.surveys.length < surveysCache.total_item_numbers) {
        const res: AjaxResponse<types.SurveysCacheType> = yield call(Api[category], {
            ...args,
            item_start_number: surveysCache.surveys.length + 1,
        });
        surveysCache.surveys = [...surveysCache.surveys, ...res.data.data.surveys];
    }
    const initSurvey = {
        surveys: surveysCache.surveys.slice(0, 20),
        pageNumber: 1,
        total: surveysCache.total_item_numbers,
    };
    yield put(actions.updateSurveyLoading(false));
    yield put(actions.updateSurveysCacheAction(surveysCache));
    yield put(actions.updateCurrentSurveysAction(initSurvey));
    if (surveysCache.surveys.length === 0) {
        yield put(actions.updateEmptyInfo(true, 'You have not any questionnaire yet'));
    }
}

/**
 * change page
 */
function* handleChangePage(action: types.ChangePageNumberSaga) {
    const pageNumber = action.payload.pageNumber;
    const surveysCache: Array<types.SurveyType> = yield select(
        (state: RootState) => state.surveyState.surveysCache.surveys,
    );
    const { name, projectName, startTime, endTime } = yield select(
        (state: RootState) => state.surveyState.searchCondition,
    );
    const sort = yield select((state: RootState) => state.surveyState.sort);
    let surveys = [...surveysCache];
    if (sort === 'dsc') {
        surveys = [...surveys.reverse()];
    }
    if (name) {
        surveys = surveysCache.filter((survey) => {
            return survey.survey_name.includes(name);
        });
    }
    if (projectName) {
        surveys = surveysCache.filter((survey) => {
            if (!survey.survey_project_name) {
                return false;
            }
            return survey.survey_project_name.includes(projectName);
        });
    }
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();
    if (startTime && endTime) {
        surveys = surveysCache.filter((survey) => {
            const surveyTime = new Date(survey.survey_created_time).getTime();
            return surveyTime - start > 0 && surveyTime - end < 0;
        });
    } else {
        if (startTime) {
            surveys = surveysCache.filter((survey) => {
                const surveyTime = new Date(survey.survey_created_time).getTime();
                return surveyTime - start > 0;
            });
        }
        if (endTime) {
            surveys = surveysCache.filter((survey) => {
                const surveyTime = new Date(survey.survey_created_time).getTime();
                return surveyTime - end < 0;
            });
        }
    }
    const currentSurveys = {
        surveys: surveys.slice((pageNumber - 1) * 20, (pageNumber - 1) * 20 + 20),
        pageNumber,
        total: surveys.length,
    };
    yield put(actions.updateCurrentSurveysAction(currentSurveys));
    if (currentSurveys.surveys.length === 0) {
        yield put(actions.updateEmptyInfo(true, 'You have not any questionnaire yet'));
    } else {
        yield put(actions.updateEmptyInfo(false, ''));
    }
}

/**
 * star survey
 */
function* handleStarSurvey(action: types.UpdateSurveyStarSaga) {
    const { survey_dri, star } = action.payload;
    const currentSurveys: types.CurrentSurveysType = yield select(
        (state: RootState) => state.surveyState.currentSurveys,
    );
    const category: CategoryType = yield select((state: RootState) => state.categoryState.category);
    const res: AjaxResponse = yield call(starSurvey, { survey_dri, star });
    if (res.data.code === 200001) {
        const surveys = currentSurveys.surveys;
        surveys.map((item) => {
            if (item.survey_dri === survey_dri) {
                item.survey_starred = !!(star + 1);
            }
        });
        yield put(actions.updateCurrentSurveysAction(currentSurveys));
        category.starred = category.starred + star;
        yield put(categoryActions.updateCategory({ ...category }));
    }
}
/**
 * change survey name
 */
function* handleChangeSurveyName(action: types.UpdateSurveyNameSaga) {
    const { survey_dri, survey_new_name } = action.payload;
    const currentSurveys: types.CurrentSurveysType = yield select(
        (state: RootState) => state.surveyState.currentSurveys,
    );
    const res: AjaxResponse = yield call(surveyRename, {
        survey_dri,
        survey_new_name,
    });
    if (res.status !== 200) {
        notice.error({
            title: 'rename failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }
    currentSurveys.surveys.map((survey) => {
        if (survey.survey_dri === survey_dri) {
            survey.survey_name = survey_new_name;
        }
    });
    yield put(actions.updateCurrentSurveysAction(currentSurveys));
}
/**
 * create survey
 */
function* handleCreateSurvey(action: types.CreateSurveySaga) {
    yield put(actions.updateCreateSurveyBox(true, true));
    const { survey_name, organization_dri } = action.payload.data;
    yield put(actions.setVerifySurveyNameMessage('', true));
    const res: AjaxResponse<{ existed: boolean }> = yield call(checkSurveyNameExists, {
        survey_name,
        organization_dri,
    });
    console.log('check survey name -->', res);
    if (res.status !== 200) {
        notice.error({
            title: 'create survey failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }
    if (res.data.data.existed) {
        yield put(
            actions.setVerifySurveyNameMessage(
                'The name has been taken,please try another name',
                true,
            ),
        );
        yield put(actions.updateCreateSurveyBox(true, false));
    } else {
        const res: AjaxResponse = yield call(createSurvey, {
            survey_name,
            organization_dri,
        });
        if (res.status !== 200) {
            notice.error({
                title: 'create survey failed!',
                description: res.data.message,
                showIcon: true,
            });
        } else {
            yield put(actions.setVerifySurveyNameMessage('', false));
            yield put(actions.updateCreateSurveyBox(false, false));
            yield put(categoryActions.updateNumberSaga());
            yield put(categoryActions.updateCurrentCategorySaga('allRest'));
            notice.success({
                title: 'success!',
                description: res.data.message,
                showIcon: true,
            });
        }
    }
}
/**
 * add deliverable tag
 */
function* handleAddDeliverableTag(action: types.AddDeliverableTag) {
    yield put(actions.updateLoadingDeliverable(true, true));
    const starTime = Date.now();
    const currentSurveys: types.CurrentSurveysType = yield select(
        (state: RootState) => state.surveyState.currentSurveys,
    );
    const { deliverable_dri, tag_to_be_added } = action.payload;
    const res: AjaxResponse<{ succeeded: boolean; deliverable_tags: Array<string> }> = yield call(
        addDeliverableTag,
        { deliverable_dri, tag_to_be_added },
    );
    const endTime = Date.now();
    if (endTime - starTime < 1000) {
        yield delay(1000 - (endTime - starTime));
    }
    yield put(actions.updateLoadingDeliverable(false, true));
    if (res.status !== 200) {
        notice.error({
            title: 'add deliverable failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }
    if (res.data.data.succeeded) {
        currentSurveys.surveys.map((survey) => {
            if (survey.deliverable_dri === deliverable_dri) {
                survey.deliverable_tags[survey.deliverable_tags.length] = tag_to_be_added;
            }
        });
        yield put(actions.updateCurrentSurveysAction(currentSurveys));
    }
}

/**
 * delete deliverable tag
 */
function* handleDeleteDeliverableTag(action: types.DeleteDeliverableTag) {
    yield put(actions.updateLoadingDeliverable(true, false));
    const starTime = Date.now();
    const currentSurveys: types.CurrentSurveysType = yield select(
        (state: RootState) => state.surveyState.currentSurveys,
    );
    const { deliverable_dri, tag_to_be_deleted } = action.payload;
    const res: AjaxResponse<{ succeeded: boolean; deliverable_tags: Array<string> }> = yield call(
        deleteDeliverableTag,
        { deliverable_dri, tag_to_be_deleted },
    );
    const endTime = Date.now();
    if (endTime - starTime < 1000) {
        yield delay(1000 - (endTime - starTime));
    }
    yield put(actions.updateLoadingDeliverable(false, false));
    if (res.status !== 200) {
        notice.error({
            title: 'delete deliverable failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }
    if (res.data.data.succeeded) {
        currentSurveys.surveys.map((survey) => {
            if (survey.deliverable_dri === deliverable_dri) {
                const index = survey.deliverable_tags.indexOf(tag_to_be_deleted);
                survey.deliverable_tags.splice(index, 1);
            }
        });
        yield put(actions.updateCurrentSurveysAction(currentSurveys));
    }
}
/**
 * search survey
 */
function* handleSearchSurvey(action: types.SearchSurveySaga) {
    const initSurveys = { surveys: [], pageNumber: 0, total: 0 };
    yield put(actions.updateSurveyLoading(true));
    yield put(actions.updateCurrentSurveysAction(initSurveys));
    yield put(actions.updateEmptyInfo(false, ''));
    yield put(actions.updateSearchConditions(action.payload));
    yield delay(1000);
    yield put(actions.updateSurveyLoading(false));
    yield put(actions.changePageNumberSaga(1));
}

/**
 * switch sort option
 */
function* handleUpdateSort(action: types.UpdateSortOrderSaga) {
    const sort = action.payload.sort;
    yield put(actions.updateSortOrder(sort));
    yield put(actions.changePageNumberSaga(1));
}
function* watchActions() {
    yield takeLatest(types.ACTION_TYPE.GET_SURVEYS, handleGetSurveys);
    yield takeLatest(types.ACTION_TYPE.CHANGE_PAGE, handleChangePage);
    yield throttle(500, types.ACTION_TYPE.UPDATE_STAR, handleStarSurvey);
    yield takeLatest(types.ACTION_TYPE.UPDATE_SURVEY_NAME, handleChangeSurveyName);
    yield takeLatest(types.ACTION_TYPE.CREATE_SURVEY_SAGA, handleCreateSurvey);
    yield takeLatest(types.ACTION_TYPE.ADD_DELIVERABLE_TAG, handleAddDeliverableTag);
    yield takeLatest(types.ACTION_TYPE.DELETE_DELIVERABLE_TAG, handleDeleteDeliverableTag);
    yield takeLatest(types.ACTION_TYPE.SEARCH_SURVEY, handleSearchSurvey);
    yield takeLatest(types.ACTION_TYPE.UPDATE_SORT_ORDER_SAGA, handleUpdateSort);
}

const sagas = [fork(watchActions)];
export default sagas;
