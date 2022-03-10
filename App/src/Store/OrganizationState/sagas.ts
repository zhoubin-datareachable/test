/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { AjaxResponse } from '../../Api/login';
import { fork, takeLatest, put, call, select } from 'redux-saga/effects';
import { notice } from '@datareachable/dr_front_componentlibrary';
import { RootState } from '../rootReducer';
import { getUserOrganizations } from '~/Api/common';
import * as types from './types';
import * as actions from './actions';
import * as categoryActions from '../CategoryState/actions';
import * as userActions from '../UserState/actions';
import * as talentActions from '../TalentGroupState/actions';
import * as surveyActions from '../SurveyState/actions';
import * as projectActions from '../ProjectState/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/** get organizations */
function* handleGetOrganizations() {
    const res: AjaxResponse<{ organizations: Array<types.OrganizationType> }> = yield call(
        getUserOrganizations,
    );
    console.log('organizations-->', res);
    if (res.status !== 200) {
        notice.error({
            title: 'fetch organizations data failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }
    const organizations = res.data.data.organizations;
    yield put(actions.updateOrganizationsAction(organizations));
    yield put(actions.updateCurrentOrganizationSaga(organizations[0]));
    yield put(categoryActions.updateNumberSaga());
}
/**
 * update current org
 */
function* handleUpdateCurrentOrg(action: types.UpdateCurrentOrganizationSaga) {
    const organization: types.OrganizationType = action.payload.org;
    const { organization_dri } = yield select(
        (state: RootState) => state.organizationState.currentOrg,
    );
    if (organization.organization_dri === organization_dri) {
        return;
    }
    const initSurveys = { surveys: [], pageNumber: 0, total: 0 };
    const initProject = {
        project_name: '',
        project_dri: '',
        owner_organization_name: '',
        owner_organization_dri: '',
        organization_logo_url: '',
    };
    yield put(surveyActions.setCurrentSurvey(false, null));
    yield put(surveyActions.updateCurrentSurveysAction(initSurveys));
    yield put(surveyActions.updateSortOrder('asc'));
    yield put(actions.updateCurrentOrgAction(organization));
    yield put(userActions.updateUserRoleAction('client'));
    yield put(talentActions.updateTalentGroupsAction([]));
    yield put(talentActions.updateCurrentTalentGroup(''));
    yield put(surveyActions.updateSearchConditions({}));
    yield put(projectActions.updateProjectsAction([]));
    yield put(projectActions.updateCurrentProjectAction(initProject));
    yield put(categoryActions.updateCurrentCategory('all'));
    yield put(categoryActions.updateNumberSaga());
    yield put(surveyActions.getSurveysSaga());
    yield put(talentActions.getTalentGroupsSaga());
}
function* watchActions() {
    yield takeLatest(types.ACTION_TYPE.GET_ORGANIZATIONS, handleGetOrganizations);
    yield takeLatest(types.ACTION_TYPE.UPDATE_CURRENT_ORG_SAGA, handleUpdateCurrentOrg);
}

const sagas = [fork(watchActions)];
export default sagas;
