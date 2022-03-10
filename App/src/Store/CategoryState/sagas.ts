/**
 * @file
 * @date 2021-10-26
 * @author zhoubin
 * @lastModify zhoubin 2021-10-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { getCategoryByClient, getCategoryBySupplier } from '~/Api/survey';
import { AjaxResponse } from '~/Api/login';
import { RootState } from '../rootReducer';
import * as types from './types';
import * as actions from './actions';
import * as surveyActions from '../SurveyState/actions';
import * as projectActions from '../ProjectState/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/**
 * update number
 */
function* handleUpdateNumber() {
    yield put(actions.uploadLoading(true));
    const organization_dri = yield select(
        (state: RootState) => state.organizationState.currentOrg.organization_dri,
    );
    const talent_group_dri = yield select(
        (state: RootState) => state.talentGroupState.currentTalentGroupDri,
    );
    const role = yield select((state: RootState) => state.userState.userRole);
    type categoryType = { all: number; starred: number; not_bound: number };
    let categories: AjaxResponse<categoryType>;
    if (role === 'client') {
        categories = yield call(getCategoryByClient, { organization_dri });
    } else {
        categories = yield call(getCategoryBySupplier, { organization_dri, talent_group_dri });
    }
    const { all = 0, starred = 0, not_bound: unbound = 0 } = categories.data.data;
    const projectRelated = all - unbound;
    yield put(actions.updateCategory({ all, projectRelated, starred, unbound }));
    yield put(actions.uploadLoading(false));
}
/**
 * update current category saga
 */
function* handleUpdateCurrentSaga(action: types.UpdateCurrentCategorySaga) {
    let category = action.payload.currentCategory;
    const currentCategory = yield select((state: RootState) => state.categoryState.currentCategory);
    if (category === 'allRest') {
        category = 'all';
    } else if (category === currentCategory) {
        return;
    }
    const initSurveys = { surveys: [], pageNumber: 0, total: 0 };
    yield put(surveyActions.setCurrentSurvey(false, null));
    yield put(surveyActions.updateEmptyInfo(false, ''));
    yield put(surveyActions.updateSortOrder('asc'));
    yield put(surveyActions.updateCurrentSurveysAction(initSurveys));
    yield put(surveyActions.updateSearchConditions({}));
    yield put(actions.updateCurrentCategory(category));
    const initProject = {
        project_name: '',
        project_dri: '',
        owner_organization_name: '',
        owner_organization_dri: '',
    };
    if (category !== 'projectRelated') {
        yield put(projectActions.updateProjectsAction([]));
        yield put(projectActions.updateCurrentProjectAction(initProject));
        yield put(surveyActions.getSurveysSaga());
    } else {
        yield put(projectActions.getProjectsSaga());
    }
}
function* watchNumberActions() {
    yield takeLatest(types.ACTION_TYPE.UPDATE_NUMBER_SAGA1, handleUpdateNumber);
    yield takeLatest(types.ACTION_TYPE.UPDATE_CURRENT_CATEGORY_SAGA, handleUpdateCurrentSaga);
}
const sagas = [fork(watchNumberActions)];
export default sagas;
