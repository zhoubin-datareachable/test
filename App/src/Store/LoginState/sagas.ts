/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin 2021-07-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { fork, takeLatest, put, call } from 'redux-saga/effects';
import { AjaxResponse } from '../../Api/login';
import { firstEntryCheck, sessionStateCheck } from '../../Api/login';
import { notice } from '@datareachable/dr_front_componentlibrary';
import { encrypt } from '~/Util/str';
import {
    getOrganizationsLogo,
    getProjectListByClient,
    getProjectListBySupplier,
    getUserOrganizations,
    getUserTalentGroups,
} from '~/Api/common';
import * as types from './types';
import * as actions from './actions';
import * as orgTypes from '../OrganizationState/types';
import * as talentGroupTypes from '../TalentGroupState/types';
import * as projectTypes from '../ProjectState/types';
import * as userActions from '../UserState/actions';
import * as orgActions from '../OrganizationState/actions';
import * as projectActions from '../ProjectState/actions';
import * as talentGroupsAction from '../TalentGroupState/actions';
import * as userAction from '../UserState/actions';
import * as surveyAction from '../SurveyState/actions';
import * as categoryActions from '../CategoryState/actions';
import * as talentGroupAction from '../TalentGroupState/actions';
import * as surveyActions from '../SurveyState/actions';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/** first entry */
function* handleFirstEntryCheck(action: types.FirstEntryCheckAction) {
    const { code, session_state } = action.payload;
    // get response
    const res: AjaxResponse = yield call(firstEntryCheck, { code, session_state });
    if (res.status !== 200) {
        // request failed
        notice.error({
            title: 'Login failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }

    switch (res.data.code) {
        case 200001: {
            // change loginStatue to true
            yield put(
                actions.loginStatusUpdate({
                    status: true,
                }),
            );
            // save jwt to local storage
            if (res.headers['dr-auth']) {
                window.localStorage.setItem('jwt', res.headers['dr-auth']);
            }
            window.location.replace('/');
        }
    }
}

/** session check */
function* handleSessionStateCheck() {
    //get response
    const res: AjaxResponse = yield call(sessionStateCheck);
    if (res.status !== 200) {
        window.localStorage.removeItem('jwt');
        window.location.replace(`/`);
    } else {
        yield put(userActions.getUserInfoSaga());
        yield put(actions.initialState());
    }
}

/** session check */
function* handleInitialState() {
    const args = location.pathname.slice(1).split('/');
    const orgDri = args[0];
    const role = args[1];
    const categoryStr = args[2];
    const talentGroupDri = args[3];
    let projectDri = args[4];
    if (!orgDri) {
        yield put(orgActions.getOrganizationsSaga());
    }

    const orgRes: AjaxResponse<{ organizations: Array<orgTypes.OrganizationType> }> = yield call(
        getUserOrganizations,
    );
    const organizations = orgRes.data.data.organizations;
    yield put(orgActions.updateOrganizationsAction(organizations));
    const org = organizations.find((item) => {
        return encrypt(item.organization_dri) === orgDri;
    });

    if (!org) {
        yield put(actions.loginStatusUpdate({ status: true }));
        return;
    }

    yield put(orgActions.updateCurrentOrgAction(org));

    if (role === 'client') {
        projectDri = talentGroupDri;
        yield put(categoryActions.updateNumberSaga());
        const categories = ['all', 'projectRelated', 'starred', 'unbound'];
        const category = categories.find((item) => {
            return item === categoryStr;
        });
        if (!category) {
            yield put(actions.loginStatusUpdate({ status: true }));
            return;
        }
        yield put(categoryActions.updateCurrentCategory(category));
        if (category === 'projectRelated') {
            type projectResType = AjaxResponse<{ projects: Array<projectTypes.ProjectType> }>;
            const projectRes: projectResType = yield call(
                getProjectListByClient,
                org.organization_dri,
            );
            const projects = projectRes.data.data.projects;
            if (projects.length === 0) {
                yield put(actions.loginStatusUpdate({ status: true }));
                yield put(surveyAction.updateEmptyInfo(true, 'You have not any project yet'));
                return;
            }
            const project = projects.find((item) => {
                return encrypt(item.project_dri) === talentGroupDri;
            });
            yield put(projectActions.updateProjectsAction(projects));
            if (!project) {
                yield put(projectActions.updateCurrentProjectAction(projects[0]));
            } else {
                yield put(projectActions.updateCurrentProjectAction(project));
            }
            yield put(actions.loginStatusUpdate({ status: true }));
        }
        yield put(actions.loginStatusUpdate({ status: true }));
        yield put(surveyAction.getSurveysSaga());
        yield put(talentGroupAction.getTalentGroupsSaga());
    }

    if (role === 'supplier') {
        yield put(userAction.updateUserRoleAction('supplier'));
        yield put(categoryActions.updateCurrentCategory(categoryStr));
        // talent groups
        const talentRes: AjaxResponse<{ talent_groups: Array<talentGroupTypes.TalentGroupType> }> =
            yield call(getUserTalentGroups, org.organization_dri);
        const talentGroups = talentRes.data.data.talent_groups;
        yield put(talentGroupsAction.updateTalentGroupsAction(talentGroups));
        const talent = talentGroups.find((item) => {
            return encrypt(item.talent_group_dri) === talentGroupDri;
        });

        if (!talent) {
            yield put(actions.loginStatusUpdate({ status: true }));
            return;
        }
        yield put(talentGroupsAction.updateCurrentTalentGroup(talent.talent_group_dri));
        yield put(categoryActions.updateNumberSaga());
        if (categoryStr === 'projectRelated') {
            type projectResType = AjaxResponse<{ projects: Array<projectTypes.ProjectType> }>;
            const projectRes: projectResType = yield call(getProjectListBySupplier, {
                organization_dri: org.organization_dri,
                talent_group_dri: talent.talent_group_dri,
            });
            const projects = projectRes.data.data.projects;
            if (projects.length === 0) {
                yield put(actions.loginStatusUpdate({ status: true }));
                yield put(surveyActions.updateEmptyInfo(true, 'You have not any project yet'));
                return;
            }
            const project = projects.find((item) => {
                return encrypt(item.project_dri) === projectDri;
            });

            const organization_dris: Array<string> = [];
            for (let i = 0; i < projects.length; i++) {
                organization_dris.push(projects[i].owner_organization_dri);
            }

            const logosRes: AjaxResponse<{
                organization_logo_urls: Array<{ dri: string; url: string }>;
            }> = yield call(getOrganizationsLogo, { organization_dris });

            const logos = logosRes.data.data.organization_logo_urls;
            for (let i = 0; i < projects.length; i++) {
                for (let j = 0; j < logos.length; j++) {
                    if (projects[i].owner_organization_dri === logos[j].dri)
                        projects[i].organization_logo_url = logos[j].url;
                }
            }
            yield put(projectActions.updateProjectsAction(projects));
            if (!project) {
                yield put(projectActions.updateCurrentProjectAction(projects[0]));
            } else {
                yield put(projectActions.updateCurrentProjectAction(project));
            }
            yield put(talentGroupAction.updateCurrentTalentSaga(talent.talent_group_dri));
        }

        yield put(surveyAction.getSurveysSaga());
        yield put(actions.loginStatusUpdate({ status: true }));
    }
}

function* watchActions() {
    yield takeLatest(types.ACTION_TYPE.FIRST_ENTRY_CHECK, handleFirstEntryCheck);
    yield takeLatest(types.ACTION_TYPE.SESSION_STATUS_CHECK, handleSessionStateCheck);
    yield takeLatest(types.ACTION_TYPE.INIT_STATE, handleInitialState);
}

const sagas = [fork(watchActions)];
export default sagas;
