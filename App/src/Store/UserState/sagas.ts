/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { fork, takeLatest, put, call, select } from 'redux-saga/effects';
import { AjaxResponse } from './../../Api/login';
import { notice } from '@datareachable/dr_front_componentlibrary';
import { RootState } from '../rootReducer';
import { TalentGroupType } from '../TalentGroupState/types';
import { getUserInfo } from '~/Api/common';
import * as types from './types';
import * as actions from './actions';
import * as talentActions from '../TalentGroupState/actions';
import * as surveyActions from '../SurveyState/actions';
import * as categoryActions from '../CategoryState/actions';
import * as projectActions from '../ProjectState/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/** get userInfo */
function* handleGetUserInfo() {
    const res: AjaxResponse<{ userinfo: types.UserInfoType }> = yield call(getUserInfo);
    console.log('userInfo-->', res);
    if (res.status !== 200) {
        notice.error({
            title: 'fetch user data failed!',
            description: res.data.message,
            showIcon: true,
        });
    } else {
        yield put(actions.updateUserInfoAction(res.data.data.userinfo));
    }
}

/**
 * update user role
 */
function* handleUpdateUserRole(action: types.UpdateUserRoleSaga) {
    const initSurveys = { surveys: [], pageNumber: 0, total: 0 };
    yield put(surveyActions.updateSortOrder('asc'));
    yield put(surveyActions.updateCurrentSurveysAction(initSurveys));
    const currentCategory = yield select((state: RootState) => state.categoryState.currentCategory);
    yield put(categoryActions.uploadLoading(true));
    const userRole = action.payload.userRole;
    yield put(actions.updateUserRoleAction(userRole));

    yield put(surveyActions.setCurrentSurvey(false, null));
    if (userRole === 'client') {
        yield put(categoryActions.updateNumberSaga());
        yield put(talentActions.updateCurrentTalentGroup(''));
        if (currentCategory === 'projectRelated') {
            yield put(projectActions.getProjectsSaga());
        } else {
            yield put(surveyActions.getSurveysSaga());
        }
    } else {
        const talent_groups: Array<TalentGroupType> = yield select(
            (state: RootState) => state.talentGroupState.talentGroups,
        );
        const talent_group = talent_groups.find(
            (item) => item.talent_group_name === 'default-group',
        );
        yield put(talentActions.updateCurrentTalentGroup(talent_group?.talent_group_dri ?? ''));
        yield put(categoryActions.updateNumberSaga());
        if (currentCategory === 'projectRelated') {
            yield put(projectActions.getProjectsSaga());
        } else {
            yield put(surveyActions.getSurveysSaga());
        }
    }
}
function* watchActions() {
    yield takeLatest(types.ACTION_TYPE.GET_USER_INFO, handleGetUserInfo);
    yield takeLatest(types.ACTION_TYPE.UPDATE_USER_ROLE_SAGA, handleUpdateUserRole);
}

const sagas = [fork(watchActions)];
export default sagas;
