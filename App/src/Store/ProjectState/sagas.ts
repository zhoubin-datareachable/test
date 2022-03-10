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
import {
    getOrganizationsLogo,
    getProjectListByClient,
    getProjectListBySupplier,
} from '~/Api/common';
import * as surveyActions from '../SurveyState/actions';
import * as types from './types';
import * as actions from './actions';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/** get projects */
function* handleGetProjects() {
    const organization_dri = yield select(
        (state: RootState) => state.organizationState.currentOrg.organization_dri,
    );
    const role = yield select((state: RootState) => state.userState.userRole);
    const talent_group_dri = yield select(
        (state: RootState) => state.talentGroupState.currentTalentGroupDri,
    );
    let res: AjaxResponse<{ projects: Array<types.ProjectType> }>;
    yield put(surveyActions.updateSurveyLoading(true));
    if (role === 'client') {
        res = yield call(getProjectListByClient, organization_dri);
    } else {
        res = yield call(getProjectListBySupplier, { organization_dri, talent_group_dri });
    }

    console.log('projects-->', res);
    if (res.status !== 200) {
        yield put(surveyActions.updateSurveyLoading(true));
        notice.error({
            title: 'fetch organizations data failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }
    const projects = res.data.data.projects;
    if (projects.length === 0) {
        yield put(surveyActions.updateEmptyInfo(true, 'You have not any project yet'));
        return;
    }
    const organization_dris: Array<string> = [];
    for (let i = 0; i < projects.length; i++) {
        organization_dris.push(projects[i].owner_organization_dri);
    }

    type logoResType = AjaxResponse<{
        organization_logo_urls: Array<{ dri: string; url: string }>;
    }>;
    const logosRes: logoResType = yield call(getOrganizationsLogo, { organization_dris });

    const logos = logosRes.data.data.organization_logo_urls;
    for (let i = 0; i < projects.length; i++) {
        for (let j = 0; j < logos.length; j++) {
            if (projects[i].owner_organization_dri === logos[j].dri) {
                projects[i].organization_logo_url = logos[j].url;
            }
        }
    }
    yield put(actions.updateCurrentProjectAction(projects[0]));
    yield put(actions.updateProjectsAction(projects));
    yield put(surveyActions.getSurveysSaga());
}

/**
 * update current project
 */
function* handleUpdateCurrentProject(action: types.UpdateCurrentProjectSaga) {
    const project = action.payload.project;
    const { project_dri } = yield select((state: RootState) => state.projectState.currentProject);
    if (project.project_dri === project_dri) {
        return;
    }
    yield put(actions.updateCurrentProjectAction(project));
    const initSurveys = { surveys: [], pageNumber: 0, total: 0 };
    yield put(surveyActions.updateCurrentSurveysAction(initSurveys));
    yield put(surveyActions.getSurveysSaga());
}
function* watchActions() {
    yield takeLatest(types.ACTION_TYPE.GET_PROJECTS, handleGetProjects);
    yield takeLatest(types.ACTION_TYPE.UPDATE_CURRENT_PROJECT_SAGA, handleUpdateCurrentProject);
}

const sagas = [fork(watchActions)];
export default sagas;
