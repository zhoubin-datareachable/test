/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
/**
 * action types
 */
export enum ACTION_TYPE {
    GET_ORGANIZATIONS = 'GET_ORGANIZATIONS',
    UPDATE_ORGANIZATIONS = 'UPDATE_ORGANIZATIONS',
    UPDATE_CURRENT_ORG_SAGA = 'UPDATE_CURRENT_ORG_SAGA',
    UPDATE_CURRENT_ORG = 'UPDATE_CURRENT_ORG',
    GET_ORGANIZATION_LOGO = 'GET_ORGANIZATION_LOGO',
}

/**
 * organization type
 */
export interface OrganizationType {
    organization_dri: string;
    organization_name: string;
    organization_logo: string;
}

/**
 * get organizations saga
 */
interface GetOrganizationsSaga {
    type: ACTION_TYPE.GET_ORGANIZATIONS;
}
/**
 * update organizations action
 */
interface UpdateOrganizationsAction {
    type: ACTION_TYPE.UPDATE_ORGANIZATIONS;
    payload: {
        organizations: Array<OrganizationType>;
    };
}
/**
 * update current organization saga
 */
export interface UpdateCurrentOrganizationSaga {
    type: ACTION_TYPE.UPDATE_CURRENT_ORG_SAGA;
    payload: {
        org: OrganizationType;
    };
}
/**
 * update current organization action
 */
interface UpdateCurrentOrgAction {
    type: ACTION_TYPE.UPDATE_CURRENT_ORG;
    payload: {
        org: OrganizationType;
    };
}
/**
 * organization reducer
 */
export interface OrganizationReducer {
    organizations: Array<OrganizationType>;
    currentOrg: OrganizationType;
}
/**
 * organization actionType
 */
export type OrganizationActionTypes =
    | GetOrganizationsSaga
    | UpdateOrganizationsAction
    | UpdateCurrentOrganizationSaga
    | UpdateCurrentOrgAction;
