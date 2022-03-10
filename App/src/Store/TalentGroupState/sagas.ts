/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { fork, takeLatest, put, call, select } from 'redux-saga/effects';
import { notice } from '@datareachable/dr_front_componentlibrary';
import { RootState } from '../rootReducer';
import { AjaxResponse } from '../../Api/login';
import { getUserTalentGroups } from '~/Api/common';
import * as types from './types';
import * as actions from './actions';
import * as surveyActions from '../SurveyState/actions';
import * as categoryActions from '../CategoryState/actions';
import * as userActions from '../UserState/actions';
import * as projectActions from '../ProjectState/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/** get talent groups */
function* handleGetTalentGroups() {
    const { organization_dri } = yield select(
        (state: RootState) => state.organizationState.currentOrg,
    );
    const res: AjaxResponse<{ talent_groups: Array<types.TalentGroupType> }> = yield call(
        getUserTalentGroups,
        organization_dri,
    );
    if (res.status !== 200) {
        notice.error({
            title: 'fetch organizations data failed!',
            description: res.data.message,
            showIcon: true,
        });
        return;
    }
    const talent_groups = res.data.data.talent_groups;
    yield put(actions.updateTalentGroupsAction(talent_groups));
}

/**
 * update current talent group
 */
function* handleUpdateCurrentTalent(action: types.UpdateCurrentTalentSaga) {
    const talentGroupDri = action.payload.talentGroupDri;
    const currentTalentGroupDri = yield select(
        (state: RootState) => state.talentGroupState.currentTalentGroupDri,
    );
    const currentCategory = yield select((state: RootState) => state.categoryState.currentCategory);
    if (talentGroupDri === currentTalentGroupDri) {
        return;
    }
    yield put(surveyActions.setCurrentSurvey(false, null));
    yield put(userActions.updateUserRoleAction('supplier'));
    const initSurveys = { surveys: [], pageNumber: 0, total: 0 };
    yield put(surveyActions.updateCurrentSurveysAction(initSurveys));
    yield put(actions.updateCurrentTalentGroup(talentGroupDri));
    yield put(categoryActions.updateNumberSaga());
    if (currentCategory === 'projectRelated') {
        yield put(projectActions.getProjectsSaga());
    } else {
        yield put(surveyActions.getSurveysSaga());
    }
}
function* watchActions() {
    yield takeLatest(types.ACTION_TYPE.GET_TALENT_GROUPS, handleGetTalentGroups);
    yield takeLatest(types.ACTION_TYPE.UPDATE_CURRENT_TALENT_SAGA, handleUpdateCurrentTalent);
}

const sagas = [fork(watchActions)];
export default sagas;
