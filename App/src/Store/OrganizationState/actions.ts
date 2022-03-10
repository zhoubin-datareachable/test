/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
import * as types from './types';
/**
 * get organizations saga
 */
const getOrganizationsSaga = (): types.OrganizationActionTypes => {
    return {
        type: types.ACTION_TYPE.GET_ORGANIZATIONS,
    };
};
/**
 * update organizations
 */
const updateOrganizationsAction = (
    organizations: Array<types.OrganizationType>,
): types.OrganizationActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_ORGANIZATIONS,
        payload: {
            organizations,
        },
    };
};
/**
 * update current organization saga
 */
const updateCurrentOrganizationSaga = (
    org: types.OrganizationType,
): types.OrganizationActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_ORG_SAGA,
        payload: {
            org,
        },
    };
};
/**
 * update selected organization action
 */
const updateCurrentOrgAction = (org: types.OrganizationType): types.OrganizationActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_ORG,
        payload: {
            org,
        },
    };
};

export {
    getOrganizationsSaga,
    updateOrganizationsAction,
    updateCurrentOrganizationSaga,
    updateCurrentOrgAction,
};
